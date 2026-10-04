import { useOutletContext } from "react-router-dom";

function Products(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Products Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default Products;