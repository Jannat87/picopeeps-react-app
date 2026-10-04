import { useOutletContext } from "react-router-dom";

function Contact_Us(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Contact Us Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}
export default Contact_Us;