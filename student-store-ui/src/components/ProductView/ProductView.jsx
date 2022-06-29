import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css"

export default function ProductView(props) {
    //const {product} = props;
    const { productId } = props;
    const { quantity } = props;
    const { handleAddItemToCart } = props;
    const { handleRemoveItemToCart } = props;
    console.log(69, quantity);
    return (
        <div className="product-view">
            <h1 className="product-id">Product # {productId}</h1>
            <ProductCard className="product-card" showDescription={true} product={props.product} quantity={quantity} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
        </div>
    )
}