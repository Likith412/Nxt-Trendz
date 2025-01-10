import './index.css'

const CartSummary = props => {
  const {totalItems, totalAmount} = props
  return (
    <div className="cart-summary-container">
      <div>
        <h1 className="cart-summary-total-amount">
          Order Total: <span className="total-amount">Rs {totalAmount}/-</span>
        </h1>
        <p className="cart-summary-total-items">{totalItems} items in cart</p>
      </div>
      <button className="cart-summary-checkout-btn" type="button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
