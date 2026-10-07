import { useOutletContext } from "react-router-dom";

function AboutUs(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>About Us Page</p>
            of 
            <h3>{title}</h3>
        </>
    )
}

export default AboutUs;