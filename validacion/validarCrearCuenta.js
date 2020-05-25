export default function validarCrearCuenta(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.username) {
        errores.username = "El Nombre es obligatorio";
    }

    // validar el email
    if(!valores.email) {
        errores.email = "El Email es Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = "Email no válido"
    }

    // validar el password
    if(!valores.password) {
        errores.password = "La contraseña es obligatoria";
    } else if( valores.password.length < 8 ) {
        errores.password = 'La contraseña debe ser de al menos 8 caracteres'
    }else if( !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]?).{8,}$/.test(valores.password) ){
        errores.password = "La contraseña debe tener al menos una letra mayuscula y un número"
    }

    return errores;
}