import { FaEye, FaEyeSlash } from "react-icons/fa";

function ShowPassword({ showPassword, setShowPassword }) {
    return (
        <div id="eye" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? <FaEyeSlash/> : <FaEye /> }
        </div>
    )
}

export default ShowPassword