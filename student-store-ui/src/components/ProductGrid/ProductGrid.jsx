
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState, useEffect } from "react";

export default function ProductGrid(props) {

    //state variables
    const [searchedActive, setSearchedActive] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [filterActive, setFilterActive] = useState(false);

    //prop variables
    const { products } = props;

    //useEffect for category
    useEffect(() => {
        setFilteredCategory(products);
    }, []);
    //handle for category
    const handleCategories = (e) => {
        let typeCategory = e.target.value;
        typeCategory != "all categories" ? setFilteredCategory(products.filter((product) => {
            if (typeCategory == product.category) {
                return product;
            }
        })) : setFilteredCategory(products);
        setFilterActive(true);
    }
    //const {searched} = props;
    const handleOnChange = (e) => {
        setSearchInput(e.target.value);
        getFilteredItems(searchInput, products);
        if (e.target.value == '') {
            setSearchedActive(false);
        } else {
            setSearchedActive(true);
        }

    }
    const getFilteredItems = (searchInput, products) => {
        if (!searchInput) {
            return products;
        }
        const data = products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredData(data);
        // setSearched(true);
        return filteredData;
    }

    const returnProducts = () => {
        if (searchedActive === false) {
            if (filterActive) {
                return (filteredCategory.map((product, i) => {
                    return (<ProductCard className="productCard" key={i} product={product} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />)
                }))
            } else {
                return (props.products.map((product, i) => {
                    return (<ProductCard className="productCard" key={i} product={product} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />)
                }))
            }
        } else if (searchedActive === true) {
            return (filteredData.map((product, i) => {
                return (<ProductCard className="productCard" key={i} product={product} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />)
            }))
        }
    }

    return (
        <div className="product-grid" id="buy">
            <div className="search-input">
                <input type="text" placeholder="Search products" onChange={handleOnChange} value={searchInput} className="textbox" />
            </div>
            <div className="categories">
                <li className="active-btn">
                    <button id="all" value="all categories" onClick={handleCategories}>All Categories</button>
                    <button id="clothing" value="clothing" onClick={handleCategories}>Clothing</button>
                    <button id="food" value="food" onClick={handleCategories}>Food</button>
                    <button id="acc" value="accessories" onClick={handleCategories}>Accessories</button>
                    <button id="tech" value="tech" onClick={handleCategories}>Tech</button>
                </li>
            </div>
            <div className="content"><h1>Best Selling Products</h1>
                <div className="grid" >
                    {returnProducts()}
                </div>
            </div>
        </div>
    )
}