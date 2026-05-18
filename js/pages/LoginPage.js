export function LoginPage() {
    return `
                <section class="content-section" style="text-align: center;">
                    <h2>Login to your account</h2>
                    <div style="max-width: 400px; margin: 0 auto; background: #fff; padding: 40px; border: 1px solid #888; border-radius: 8px;">
                        <form id="login-form" style="display: flex; flex-direction: column; gap: 15px; text-align: left;">
                            <div style="display: flex; flex-direction: column; gap: 5px;">
                                <label style="font-weight: bold;">Email</label>
                                <input type="email" id="l-email" placeholder="Your email" required
                                style="width: 100%; padding: 12px; border: 1px solid #888; border-radius: 4px;">
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 5px;">
                                <label style="font-weight: bold;">Password</label>
                                <input type="password" id="l-pass" placeholder="Your password" required
                                style="width: 100%; padding: 12px; border: 1px solid #888; border-radius: 4px;">
                            </div>
                            <button class="btn" type="submit" style="width: 100%; margin-top: 10px; background: #000; color: #fff; padding: 15px; font-size: 1.1rem;">Sign In</button>
                            <p style="text-align: left; width: 100%; margin-top: -30px;"><a href="#" data-page="register" id="register-link">Don't have an account?</a></p>
                        </form>
                    </div>
                </section>`;
}