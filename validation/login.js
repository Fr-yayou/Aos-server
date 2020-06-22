const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validateLoginInput(data){
    let errors ={}

    //Convert empty field to string in order to use validator function//
    data.email = !isEmpty(data.email) ? data.email :""
    data.password = !isEmpty (data.password) ? data.password:""

    //Email check //
    if(Validator.isEmpty(data.email)){
        errors.email ="Ce champ est obligatoire"
    }else if(!Validator.isEmail(data.email)){
        errors.email ="Le format de l'e-mail est incorrect";
    }

    //Password check//
    if(Validator.isEmpty(data.password)){
        errors.password ="Ce champ est obligatoire"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}