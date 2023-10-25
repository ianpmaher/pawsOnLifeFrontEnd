import { useParams } from "react-router-dom"
import "../../services/auth"

const SuccessPage = () => {
    const params = useParams()
    const resultId = params.symbol
    const validator = params.symbol
    const url = `https://dev.pawson.life/confirmRegister?id=${resultId}&validation=${validator}`
    
    return(
        <h1>success</h1>
        

    )
}
export default SuccessPage