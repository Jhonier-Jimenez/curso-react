import { useMemo, useState } from "react";

const ProductList = () => {
  console.log("component updated");
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const [newProduct, setNewProduct] = useState({ id: "", name: "", price: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNewProduct({
      ...newProduct,
      [name]: name === "price" ? parseInt(value) : value,
    });
  };

  const addNewProduct = () => {
    if (newProduct.name && newProduct.price) {
      const newId = products.length + 1;
      const updatedProducts = [...products, { ...newProduct, id: newId }];
      setProducts(updatedProducts);
    }
  };

  // const totalPrice = useMemo(() => {
  //   return cart.reduce((acc, product) => acc + product.price, 0);
  // }, [cart]);

  const totalPrice = useMemo(() => {
    console.log("TOTAL PRICE CALCULATED");
    return cart.reduce((acc, product) => {
      // console.log(acc, product.price);
      return acc + product.price;
    }, 0);
  }, [cart]);

  return (
    <>
      <div className="product-shopping-container">
        <div className="container">
          <h2>Product List</h2>
          <ul className="product-list">
            {products.map((product, index) => (
              <li key={index} className="product-item">
                {product.name} - ${product.price}
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="container">
          <h2>Shopping Cart</h2>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                {product.name} - ${product.price}
                <button className="remove-from-cart-btn">
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total Price: ${totalPrice}</h3>
        </div>
      </div>

      <div className="container">
        <h2>Add a new Product</h2>
        <form action="">
          <label>Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <br />
          <label>Product Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={addNewProduct}
            className="add-product-btn"
          >
            Add to Products list
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductList;
