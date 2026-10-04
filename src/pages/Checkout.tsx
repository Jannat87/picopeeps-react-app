import { useOutletContext } from "react-router-dom";

function Checkout(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Checkout Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}
export default Checkout;