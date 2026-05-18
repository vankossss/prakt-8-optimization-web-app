import state from "./store/state.js";
import router from "./router/router.js";
import { getProducts } from "./api/api.js";
import { HomePage } from "./pages/HomePage.js";
import { StorePage } from "./pages/StorePage.js";
import { DetailsPage } from "./pages/DetailsPage.js";
import { CartPage } from "./pages/CartPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { RegisterPage } from "./pages/RegisterPage.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { About } from "./components/About.js";
import { Navigation } from "./router/router.js";

function render () {
    const mainContent = document.getElementById("main-content");
    const page = state.currentPage;

    if(page === "home"){
        mainContent.innerHTML = HomePage();
        const shopnowBTN = document.getElementById("shop-now");
        shopnowBTN.onclick = () => {
            router.navigate("store");
        }
    } else if (page === "store") {
        mainContent.innerHTML = StorePage();
        document.querySelectorAll(".item-card").forEach(card => {
            card.onclick = () => router.navigate("details", { id: parseInt(card.dataset.id) })
        })
    } else if (page === "details") {
        const selectedProduct = state.products.find(p => p.id === state.selectedProduct);
        mainContent.innerHTML = DetailsPage(selectedProduct);
        const addtocartBTN = document.getElementById("add-to-cart");
        addtocartBTN.onclick = () => {
            const product = state.products.find(p => p.id === state.selectedProduct);
            state.updateState("cart", [...state.cart, product]);
            alert("Product added to cart!");
        }
        const backcatalogBTN = document.getElementById("back-catalog");
        backcatalogBTN.onclick = () => router.navigate("store");
    } else if (page === "cart") {
        mainContent.innerHTML = CartPage();
        const checkoutBTN = document.getElementById("checkout");
        checkoutBTN.onclick = () => {
            alert("Successful!");
            state.updateState("cart", []);
        }
        const backtostoreBTN = document.getElementById("back-to-store");
        backtostoreBTN.onclick = () => router.navigate("store");
    } else if (page === "about") {
        mainContent.innerHTML = About();
    } else if (page === "contact") {
        mainContent.innerHTML = ContactPage();
    const contactForm = document.getElementById("contact-form")
        if (contactForm){
            contactForm.onsubmit = (e) => {
                e.preventDefault();

                const formData = {
                    name: document.getElementById("c-name").value,
                    email: document.getElementById("c-email").value,
                    message: document.getElementById("c-msg").value,
                    date: new Date().toLocaleString()
                };

                alert("Message sent!")
                state.updateState("lastMessageSent", formData)
                router.navigate("home");

            }
        }
    } else if (page === "login") {
        mainContent.innerHTML = LoginPage();
        const loginForm = document.getElementById("login-form");
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById("l-email").value;
            const password = document.getElementById("l-pass").value;
            if (email && password) {
                alert("Login successful!");
                state.updateState("user", { email });
                router.navigate("home");
            } else {
                alert("Please enter email and password.");
            }
        };
        const registerBTN = document.getElementById("register-link");
        registerBTN.onclick = (e) => {
            e.preventDefault();
            router.navigate("register");
            }
    } else if (page === "register") {
        mainContent.innerHTML = RegisterPage();
        const registerForm = document.getElementById("register-form");
        registerForm.onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById("r-email").value;
            const password = document.getElementById("r-pass").value;
            if (email && password) {
                alert("Registration successful!");
                state.updateState("user", { email });
                router.navigate("home");
            } else {
                alert("Please enter email and password.");
            }
        };
    }
}

function initPage(){
    const app = document.getElementById("app");

    app.innerHTML = `${Header()}
    <main id="main-content"></main>
    ${Footer()} `;
    Navigation();
}


async function initApp() {
    initPage();
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `<div class="loading-products">
    <div class ="spinner"></div>
    <p>Loading products...</p>
</div>`;
    try{
        const products = await getProducts();
        state.updateState("products", products);
        render();
    } 
    catch (error) {
        console.error("Error: ", error);
    }
}

window.addEventListener("stateUpdated", render);
router.init();
initApp();