export function Header() {
    return `
    <header class="header">
        <nav>
            <a href="#" data-page="home">Home</a>
            <a href="#" data-page="store">Store</a>
            <a href="#" data-page="about">About</a>
            <a href="#" data-page="contact">Contact</a>
        </nav>
        <div class="user-actions">
            <a href="#" data-page="cart">Cart</a>
            <a href="#" data-page="login">Login</a>
        </div>
    </header>`;
}