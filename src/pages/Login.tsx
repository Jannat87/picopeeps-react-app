import { useOutletContext } from "react-router-dom";

function Login(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Login Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default Login;