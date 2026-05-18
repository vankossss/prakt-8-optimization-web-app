import state from "../store/state.js";
import router from "../router/router.js";

export function DetailsPage(product) {
    return ` <section class="content-section">
            <div style="display: flex; gap: 2rem; align-items: center;">
                <img src="${product.thumbnail}" style="width: 300px; border: 1px solid #ddd;">
                <div>
                    <h1>${product.title}</h1>
                    <p style="font-size: 1.5rem; font-weight: bold;">$${product.price}</p>
                    <button class="btn" id="add-to-cart" style="background: #000; color: #fff;">Add to Cart</button>
                    <button class="btn" id="back-catalog">Back to Catalog</button>
                </div>
            </div>
            </section>`;
}