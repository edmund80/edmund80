import React from 'react';
import { Container, Row } from 'reactstrap'
import { useCart } from '../app/shared/CART'

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <Container>
      <Row>
      <h2>Your Cart</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Row>

      <Row>
        <p>Total: ${cartTotal}</p>
        <button onClick={clearCart}>Clear Cart</button>
        </Row>
    </Container>
  );
};

export default CartPage;