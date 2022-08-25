const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateEvent(data) {
    let errors = {};
    data.nom = !isEmpty(data.nom) ? data.nom : "";
    data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
    data.adresse = !isEmpty(data.adresse) ? data.adresse : "";
    
    if (!validator.isEmail(data.adresse)) {
        errors.adresse = "Format Email required";
      }
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required name";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required name";
    }
 
    
 

 
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
};