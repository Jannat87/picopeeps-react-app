import { useOutletContext } from "react-router-dom";

function Product_Details(){
    const title = useOutletContext<string>();
    
    return(
        <>
            <p>Product Details Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}
 
export default Product_Details;