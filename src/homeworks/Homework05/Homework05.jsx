import Product from "../../components/Product/Product";
import "./styles.css";
import { products } from "./data";

function Homework05() {
  const productsElements = products.map((product) => {
    return (
      <Product
        key={product.id}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });

  return <div className="homework05-wrapper">{productsElements}</div>;
}

export default Homework05;