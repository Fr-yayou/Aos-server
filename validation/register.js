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
    errors.name ="Name is required"
}

//Email check//

if(Validator.isEmpty(data.email)){
    errors.email = "Email field is required"
}else if(!Validator.isEmail(data.email)){
    errors.email ="Email is invalid"
}

// Password Check//

if(Validator.isEmpty(data.password)){
    errors.password="Password is required"
}
if(Validator.isEmpty(data.password2)){
    errors.password2="Confirm password is required"
}

//check the length of the password//

if(!Validator.isLength(data.password,{min:6, max:30})){
    errors.password = "Password must be at least 6 cheracters"
}

//check if the two password match//
if(!Validator.equals(data.password,data.password2)){
    errors.password2 = "Password must match"
}

return {
    errors,isValid:isEmpty(errors)
}
}
