let email = 'vegeto@gmail.com'
const protectEmail = (email) =>{
    let maskID = "";
    let prefix = email.substring(0, email.lastIndexOf("@"));
    let postfix = email.substring(email.lastIndexOf("@"))
    for(let i = 0; i < prefix.length; i++){
        if(i === 0 || i === prefix.length - 1)
            maskID = maskID + prefix[i].toString();
        else    
            maskID = maskID + "*";
    }
    return maskID + postfix
}

console.log(protectEmail(email))