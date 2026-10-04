import { useOutletContext } from "react-router-dom";

function My_Order(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>My Order Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default My_Order;