import "./Searchbar.css"
import { useState } from "react"

export default function Searchbar(props){
    //prop variables
    const {products} = props;
    console.log(24,products);
    //state variables
    const [searchInput, setSearchInput] = useState("");
    //searchBar function
    const searchBar=()=>{
        
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    if (searchInput.length > 0) {
          products.filter((product) => {
          return product.name.match(searchInput);
      });
    }

    return(
        <div className="search-input">
        <input type="text" placeholder="Search products" onChange={handleChange} value={searchInput} className="textbox" />
        </div>
    )
}