import { useOutletContext } from "react-router-dom";

function Home(){
    const title = useOutletContext<string>();
    return(
        <>
            {/* <p>Home Page</p>
            of
            <h3>{title}</h3> */}
        </>
    )
}

export default Home;