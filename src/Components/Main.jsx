import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Mainpage() {

    let [product, setProduct] = useState([]);
    let [search, setSearch] = useState('');
    let [count, setCount] = useState(0);

    // Handle adding to cart
    function adding() {
        setCount(prevCount => prevCount + 1); // Use functional update to avoid direct mutation
    }

    // Fetch products from API on component mount
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(result => setProduct(result));
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    // Handle search input change
    function searching(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <nav id='nav-bar'>
                <h1 id='shopify'>Shopify</h1>
                <ul>
                    <li><Link to="/signinpage"><button className='navbtn'><b>Sign up</b></button></Link></li>
                    <li><Link to="/loginpage"><button className='navbtn'><b>Log in</b></button></Link></li>
                    <li><button className='navbtn'><i className="fa-solid fa-cart-shopping"></i><b> Add to Cart: {count}</b></button></li>
                </ul>
            </nav>
            <br /><br /><br />

            <div id='topimg'>
                <div id='ff'>
                    <h1 id='shop' style={{ fontSize: '32px', color: 'white' }}>
                        Shop millions of top-quality products at unbeatable prices! From fashion to electronics,
                        <br /> discover the latest trends and unique finds.
                    </h1>
                    <h4 id='fast' style={{ fontSize: '21px', color: 'white' }}>
                        Fast shipping, exclusive deals—your ultimate shopping destination!
                    </h4>

                    <input type="text" placeholder='Search any products' onChange={searching} id='search-input' />
                </div>
            </div>
            <br /><br /> <br />

            <div id='productbox'>
                {
                    product.filter(
                        value =>value.title.toLowerCase().includes(search.toLowerCase()))
                        .map(data => (
                            <div id='imagecart' key={data.id}> {/* Added unique key */}
                                <img id='productimages' src={data.image} alt={data.title} />

                                <div id='productinfo'>
                                    <p>{data.title}</p>
                                    <p>Price: ${data.price}</p> <br />

                                    <button id='btn1' className='shopbtns' onClick={adding}>Add to Cart</button>
                                    <button id='btn2' className='shopbtns'>Buy Now</button>
                                </div>
                            </div>

                        
                        ))
                }
            </div>
            <br /><br />
        </>
    );
}
