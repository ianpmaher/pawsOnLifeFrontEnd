import { useSearchParams } from "react-router-dom"
import * as auth from "../../services/auth"
import { useEffect } from "react";
import { useState } from "react";

const SuccessPage = () => {
    const [searchParams] = useSearchParams();
    const [valid, setValid] = useState(false);
    const id = searchParams.get("id");
    const validator = searchParams.get("validation");
    //const url = `https://dev.pawson.life/confirmRegister?id=${resultId}&validation=${validator}`
    useEffect( () => {
        async function verify () {
            const isValid = await auth.VerifyUser(id, validator);
            setValid(isValid);
        }
        verify();
    })
    return valid ? (
        <h1>success</h1>
        

    ) : ( <h1>Fail. GTFO</h1>)
}
export default SuccessPage