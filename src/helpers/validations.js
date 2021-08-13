const errors = {};

const validateName = (name) => {
    console.log('name ' + name);
    if (!name || name === '' || name === "undefined") {
        return errors.name = "Por favor, ingrese su nombre"
    } else if (!name.match(/^[a-zA-Z]+$/)) {
        return errors.name = "Use sólo letras";
    } else if (name.length < 4) {
        return errors.name = "El nombre es muy corto"
    } else {
        return errors.name = ''
    }
};

const validateLastname = (lastname) => {
    console.log('lastname ' + lastname);
    if (!lastname || lastname === '' || lastname === "undefined") {
        return errors.lastname = "Por favor, ingresar su apellido"
    } else if (!lastname.match(/^[a-zA-Z]+$/)) {
        return errors.lastname = "Use sólo letras"
        // } else if (lastname.length < 5) {
        //     return errors.lastName = "El apellido es muy corto"
    } else {
        return errors.lastname = ''
    }
};

const validateEmail = (email) => {
    console.log('mail ' + email);
    const regExEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!email || email === '' || email === "undefined") {
        return errors.email = "Por favor, ingrese su correo electrónico";
    } else if (!regExEmail.test(email)) {
        return errors.email = "El dato ingresado no parece ser un correo electrónico";
    } else if (regExEmail.test(email)) {
        return errors.email = ''
    }
};

const validatePhone = (phone) => {
    console.log('tel ' + phone);
    const regExPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!phone || phone === '' || phone === "undefined") {
        return errors.phone = "Por favor, ingrese su número telefónico"
    } else if (!regExPhone.test(phone)) {
        return errors.phone = "El dato ingresado no parece ser un teléfono"
    } else if (regExPhone.test(phone)) {
        return errors.phone = ''
    }
};

const validateOrganization = (organization) => {
    console.log('pay ' + organization);
    if (organization === '' || organization === '--Escoje una opción--') {
        return errors.organization = 'Por favor, escoga un paquete'
    } else {
        return errors.organization = ''
    }
}


export const validations = { errors, validateName, validateLastname, validateEmail, validatePhone, validateOrganization };