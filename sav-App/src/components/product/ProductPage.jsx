import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState("default");
    const productsPerPage = 4;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://fakestoreapi.com/products");
                const productsWithRatings = response.data.map((product) => ({
                    ...product,
                    rating: product.rating || { rate: 0 }, 
                }));
                setProducts(productsWithRatings);
                setFilteredProducts(productsWithRatings); 
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    useEffect(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const productsToShow = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        setCurrentProducts(productsToShow);
    }, [currentPage, filteredProducts]);
    useEffect(() => {
        let sortedProducts = [...filteredProducts];
        if (sortOption === "rating-asc") {
            sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
        } else if (sortOption === "rating-desc") {
            sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        } else if (sortOption === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
        setCurrentPage(1);
    }, [sortOption]);
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(filteredProducts.length / productsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };
    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
        setCurrentPage(1); 
    };
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };
    const handleDragStart = (index) => (event) => {
        event.dataTransfer.setData("draggedIndex", index);
    };

    const handleDrop = (index) => (event) => {
        const draggedIndex = Number(event.dataTransfer.getData("draggedIndex"));
        if (draggedIndex === index) return;

        const updatedProducts = [...currentProducts];
        const [draggedItem] = updatedProducts.splice(draggedIndex, 1);
        updatedProducts.splice(index, 0, draggedItem);

        const globalIndex = (currentPage - 1) * productsPerPage + index;
        const updatedFilteredProducts = [...filteredProducts];
        updatedFilteredProducts.splice(globalIndex, 0, draggedItem);
        updatedFilteredProducts.splice(draggedIndex, 1);

        setFilteredProducts(updatedFilteredProducts);
        setCurrentProducts(updatedProducts);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="cont">
            <div className="search-container">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="main-int"
                />
            </div>
            <div className="sort-container">
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="default">Sort by</option>
                    <option value="rating-asc">Low to High Rating</option>
                    <option value="rating-desc">High to Low Rating</option>
                    <option value="price-asc">Low to High Price</option>
                    <option value="price-desc">High to Low Price</option>
                </select>
            </div>
            {loading ? (
                <div className="loading">Loading products...</div>
            ) : (
                <>
                    <div className="products-cont">
                        {currentProducts.map((ele, index) => (
                            <div
                                key={ele.id}
                                className="box"
                                draggable
                                onDragStart={handleDragStart(index)}
                                onDrop={handleDrop(index)}
                                onDragOver={handleDragOver}
                            >
                                <img src={ele.image} alt="" className="box-image" />
                                <p>{ele.title}</p>
                                <h5>$ {ele.price}</h5>
                                <h6>☆ {ele.rating.rate}</h6>
                            </div>
                        ))}
                    </div>
                    {filteredProducts.length > 0 && (
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={currentPage === index + 1 ? "active" : ""}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                    {currentProducts.length === 0 && (
                        <p className="no-results">No products found.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default Product;
