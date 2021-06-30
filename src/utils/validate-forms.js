const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
        return `Il ${fieldName} è richiesto`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
        return "Caratteri non consentiti";
    }
    if (fieldValue.trim().length < 3) {
        return `Il ${fieldName} deve contenere almeno 3 lettere`;
    }
    return null;
};

const emailValidation = (email) => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email
        )
    ) {
        return null;
    }
    if (email.trim() === "") {
        return "È richiesta un'email";
    }
    return "Perfavore inserisci un'email valida";
};

const requestedValue = (fieldValue) => {
    if (fieldValue.trim() === "") {
        return `Devi inserire qualcosa`;
    }
    return null;
};
const textValidation = (fieldValue) => {
    if (fieldValue.trim() === "") {
        return `Devi scriverci qualcosa`;
    }
    return null;
};

const numberValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
        return `Il ${fieldName} è richiesto`;
    }
    if (/^\d+$/.test(fieldValue)) {
        return null;
    }
    return `${fieldName} deve essere un numero`;
};

module.exports = {
    nameValidation,
    emailValidation,
    requestedValue,
    textValidation,
    numberValidation,
};
