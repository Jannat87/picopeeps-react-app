import { useOutletContext } from "react-router-dom";

function Category_Products(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Category Products Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default Category_Products;