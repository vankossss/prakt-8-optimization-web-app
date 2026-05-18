import state from "../store/state.js";
import router from "../router/router.js";

export function CartPage() {
    const total = state.cart.reduce((sum, item) => sum + item.price, 0);
    return `
                <section class="content-section">
                    <h2>Your Cart</h2>
                    ${state.cart.length === 0 ? "<p>Your cart is empty</p>" : state.cart.map(item => `<div>${item.title} - $${item.price}</div>`).join('')}
                    <h3>Total: $${total}</h3>
                    <button class="btn" id="checkout">Checkout</button>
                    <button class="btn" id="back-to-store">Continue Shopping</button>
                </section>`;
}