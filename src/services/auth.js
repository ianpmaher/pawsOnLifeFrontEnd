export async function isAuthorized(){
    const result = await fetch("http://localhost:4013/authorize", {
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

export function Logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
}