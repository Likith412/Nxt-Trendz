import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      const getTotalAmount = () => {
        const totalAmount = cartList.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        )
        return totalAmount
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  onClick={removeAllCartItems}
                  type="button"
                  className="cart-remove-all-btn"
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary
                  totalAmount={getTotalAmount()}
                  totalItems={cartList.length}
                />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
