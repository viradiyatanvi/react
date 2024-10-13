import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const navigate = useNavigate(); 

  // Handle Increment
  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Handle Decrement
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // Handle Delete Item
  const handleDeleteItem = (id) => {
    const filteredItem = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(filteredItem);
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return cartAllProduct.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  // Handle Checkout
  const handleCheckout = () => {
    const totalPrice = calculateTotal();
    alert(`Total Amount: ₹${totalPrice}`); 
    setCartAllProduct([]); 
    navigate("/Home"); 
  };

  // Handle Back to Home
  const handleBackToHome = () => {
    navigate("/Home"); 
  };

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct.length > 0 ? (
          <>
            {cartAllProduct.map((product) => (
              <div className="col-8 border rounded d-flex gap-3" key={product.id}>
                <div className="p-1">
                  <img
                    src={product.img}
                    alt={product.model}
                    className="cart-product-size"
                  />
                </div>
                <div className="p-1 d-flex gap-3">
                  <div>
                    <h3 className="text-hiding m-0">{product.model.toUpperCase()}</h3>
                    <p className="m-0 fs-5"><span className="font-bold ">₹</span> {product.price}</p>
                    <p className="m-0 font-size-12 font-bold">{product.space}</p>
                    <p className="m-0 font-size-12 font-bold">{product.camera}</p>
                    <div className="d-flex gap-3 mt-1">
                      <p
                        className="m-0 border p-0 px-2 py-1 rounded pointer"
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </p>
                      <p className="m-0">{product.count}</p>
                      <p
                        className="m-0 border p-0 px-2 py-1 rounded pointer"
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <p>{product.description}</p>
                    <p onClick={() => handleDeleteItem(product.id)}>
                      <i className="fa-solid fa-trash text-danger pointer"></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {cartAllProduct.length === 0 && (
              <div className="col-12">
                <h1 className="text-center fs-3">No Products Available in Cart</h1>
              </div>
            )}

            {/* Total Price and Checkout Section */}
            {cartAllProduct.length > 0 && (
              <div className="col-12 mt-4 text-end">
                <h2>Total: ₹{calculateTotal()}</h2>
                <button className="btn btn-primary me-2" onClick={handleCheckout}>
                  Checkout
                </button>
                <button className="btn btn-secondary" onClick={handleBackToHome}>
                  Back to Home
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="col-12">
            <h1 className="text-center fs-3">No Products Available in Cart</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
