import React from 'react';
import { useLocation } from 'react-router-dom';

const MainCart = () => {
  const location = useLocation();
  const cart = location.state.cart;
  const price = location.state.price;

  // Inline styles
  const containerStyle = {
    // marginTop: '50px',
    padding: '20px',
    backgroundColor: '#fcf8f2', // Light background color
    minHeight: '100vh',
  };

  const totalPriceStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#d79d78',
    marginBottom: '20px',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imgStyle = {
    width: '200px',
    height: '250px',
    padding:"20px"
    
    
  };

  const cardBodyStyle = {
    padding: '15px',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  };

  const cardPriceStyle = {
    fontSize: '16px',
    color: '#d79d78',
  };

  return (
    <div style={containerStyle}>
      <h1 style={totalPriceStyle}>Total Price: ${price}</h1>
      <div style={cardsContainerStyle}>
        {cart.map((data) => (
          <div key={data.id} style={cardStyle}>
            <div style={{marginLeft:"47px"}}> <img src={data.image} alt={data.title} style={imgStyle}  /></div>
           
            <div style={cardBodyStyle}>
              <h5 style={cardTitleStyle}>{data.title}</h5>
              <p style={cardTextStyle}>{data.description}</p>
              <p style={cardPriceStyle}>${data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCart;
