// Aquí esto se usa para saber que si hay un error en el login

const USUARIOS_KEY = "usuarios";
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if (!usuarios) {
        return []
    }

    return JSON.parse(usuarios);
};

// creo errores posibles para cubrirlos (en este caso es si la password no concuerda y el correo)

export const registrar = (email, fecha, contrasena, confirmar) => {
    if(contrasena !== confirmar) {
        throw new Error("Las contraseñas no coinciden");
    }

    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios) {
        if(usuario.email === email) {
            throw new Error("El correo ya se encuentra registrado");
        }
    }

    usuarios.push({
        id: new Date().getTime(),
        email: email,
        fecha: fecha,
        contrasena: contrasena,
        favoritos: [],
    });

    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

export const login = (email, contrasena,) => {
    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios) {
        if(usuario.email === email && usuario.contrasena === contrasena) {
            localStorage.setItem(USUARIO_ACTIVO_KEY, usuario.id);
            return usuario;
        }
    };

    throw new Error("usuario y/o contraseña incorrectos");
};

export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIO_ACTIVO_KEY);

    if(!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios) {
        if (usuario.id === parseInt (usuarioActivo)) {
            return usuario;
        }
    }

    return null;
};

export const logout = () => {
    localStorage.removeItem(USUARIO_ACTIVO_KEY);
}

