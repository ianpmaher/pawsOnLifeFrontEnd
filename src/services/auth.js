export async function isAuthorized(){
    const result = await fetch("https://dev.pawson.life/authorize", {
        method: "POST",
        headers: {
            "x-access-token" : localStorage.getItem("token") || null
        }
    });
    let validated = false;
    if(result.status === 200){
        validated = true;
    }
    return validated;
}

export async function VerifyUser(id, validator){
    const result = await fetch("https://dev.pawson.life/confirmRegister", {
        method: "POST",
        body: JSON.stringify({
            id: id,
            validator: validator
        })
    });
    let validated = false;
    if(result.status === 200){
        validated = true;
    }
    return validated;
}

export function Logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
}