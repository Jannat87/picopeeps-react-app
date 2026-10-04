import { useOutletContext } from "react-router-dom";
function My_Account(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>My Account Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default My_Account;