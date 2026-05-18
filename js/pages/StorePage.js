import {ProductCard} from "../components/ProductCard.js";
import state from "../store/state.js";

export function StorePage() {
    return `<section class="content-section">
    <h2>All Products</h2>
    <div class="item-grid">
    ${state.products.map(product => ProductCard(product)).join("")}
        </div>
    </section>`;
}