const USUARIOS_KEY = "usuarios";
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if (!usuarios) {
        return []
    }

    return JSON.parse(usuarios);
};

// Actualiza la información del usuario en el localStorage
export const actualizarUsuario = (usuarioActualizado) => {
    const usuarios = obtenerUsuarios();
    const indice = usuarios.findIndex(usuario => usuario.id === usuarioActualizado.id);
    if (indice !== -1) {
        usuarios[indice] = usuarioActualizado;
        localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
    } else {
        throw new Error("Usuario no encontrado");
    }
};

// Registra un nuevo usuario
export const registrar = (nombre, email, fecha, contrasena, confirmar) => {
    if (contrasena !== confirmar) {
        throw new Error("Las contraseñas no coinciden");
    }

    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.email === email) {
            throw new Error("El correo ya se encuentra registrado");
        }
    }

    usuarios.push({
        id: new Date().getTime(),
        nombre: nombre,
        email: email,
        fecha: fecha,
        contrasena: contrasena,
        favoritos: [],
    });

    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

// Iniciar sesión
export const login = (email, contrasena) => {
    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.email === email && usuario.contrasena === contrasena) {
            localStorage.setItem(USUARIO_ACTIVO_KEY, usuario.id);
            return usuario;
        }
    }

    throw new Error("Usuario y/o contraseña incorrectos");
};

// Obtiene el usuario en sesión
export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIO_ACTIVO_KEY);

    if (!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for (const usuario of usuarios) {
        if (usuario.id === parseInt(usuarioActivo)) {
            return usuario;
        }
    }

    return null;
};

// Cerrar sesión
export const logout = () => {
    localStorage.removeItem(USUARIO_ACTIVO_KEY);
}

// Añadir favorito al usuario en sesión
export const añadirFavorito = (favorito) => {
    const usuario = obtenerUsuarioEnSesion();
    if (!usuario) {
        throw new Error("No hay usuario en sesión");
    }
    if (!usuario.favoritos.includes(favorito)) {
        usuario.favoritos.push(favorito);
        actualizarUsuario(usuario);
    }
};

// Eliminar favorito del usuario en sesión
export const eliminarFavorito = (favorito) => {
    const usuario = obtenerUsuarioEnSesion();
    if (!usuario) {
        throw new Error("No hay usuario en sesión");
    }
    const index = usuario.favoritos.indexOf(favorito);
    if (index !== -1) {
        usuario.favoritos.splice(index, 1);
        actualizarUsuario(usuario);
    }
};

// Obtener favoritos del usuario en sesión
export const obtenerFavoritosUsuario = () => {
    const usuario = obtenerUsuarioEnSesion();
    return usuario ? usuario.favoritos : [];
};
