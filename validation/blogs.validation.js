const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateEvent(data) {
    let errors = {};
    data.titre = !isEmpty(data.titre) ? data.titre : "";
    data.contenu = !isEmpty(data.contenu) ? data.contenu : "";
    
   
    if (validator.isEmpty(data.titre)) {
        errors.name = "Required titre";
    }
    if (validator.isEmpty(data.contenu)) {
        errors.email = "Required contenu";
    }
    
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
};