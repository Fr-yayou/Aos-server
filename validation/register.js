const  Validator = require ("validator")
const isEmpty = require ("is-empty")

module.exports = function validateRegisterInput(data){
    let errors ={}
    // Convert empty field to String to use the validator //

data.name = !isEmpty(data.name) ? data.name:""
data.password = !isEmpty(data.password) ? data.password:""
data.password2 = !isEmpty(data.password2) ? data.password2:""

//Name check//

if(Validator.isEmpty(data.name)){
    errors.name ="Ce champ est obligatoire"
}

//Email check//

if(Validator.isEmpty(data.email)){
    errors.email = "Ce champ est obligatoire"
}else if(!Validator.isEmail(data.email)){
    errors.email ="Email is invalid"
}

// Password Check//

if(Validator.isEmpty(data.password)){
    errors.password="Ce champ est obligatoire"
}
if(Validator.isEmpty(data.password2)){
    errors.password2="Ce champ est obligatoire"
}

//check the length of the password//

if(!Validator.isLength(data.password,{min:6, max:30})){
    errors.password = "Le mot de passe n'est pas conforme. Il doit comprendre 6 caractères minimum"
}

//check if the two password match//
if(!Validator.equals(data.password,data.password2)){
    errors.password2 = "Les champs Mot de passe et confirmation de Mot de passe doivent être identiques"
}

return {
    errors,isValid:isEmpty(errors)
}
}
