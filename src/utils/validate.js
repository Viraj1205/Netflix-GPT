
export const validateData = (email, password,name) =>{
    const isValidEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email);
    const isValidPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidFullName =/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    if(!isValidEmail) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";
    if(!isValidFullName) return "Name is not valid";

    return null;
}