import state from "../store/state.js";
import router from "../router/router.js";

export function ContactPage() {
    return `
                <section class="context-section" style="text-align: center;">
                    <h2>Contact Us</h2>
                    <div style = "max-width: 500px; margin: 0 auto; background: #fff; padding: 40px; border: 1px solid #888; border-radius: 8px;">
                    <form id="contact-form" style="display: flex; flex-direction: column; gap: 15px; text-align: left;">
                       <div style="display: flex; flex-direction: column; gap: 5px;">
                            <label style="font-weight: bold;">Full Name</label>
                            <input type="text" id="c-name" placeholder="Enter your name" required
                            style="width: 100%; padding: 12px; border: 1px solid #888; border-radius: 4px;>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <label style="font-weight: bold;">Email</label>
                            <input type="email" id="c-email" placeholder="Your email" required
                            style="width: 100%; padding: 12px; border: 1px solid #888; border-radius: 4px;>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <label style="font-weight: bold";>Your message</label>
                            <textarea id="c-msg" placeholder="How we can help you?" required
                            style="width: 100%; padding: 12px; border: 1px solid #888; border-radius: 4px; min-height: 120px; resize: vertical;"></textarea>
                        </div>
                        <button class="btn" type="submit" style="width: 100%; margin-top: 10px; background: #000; color: #fff; padding: 15px; font-size: 1.1rem;">Send message</button>
                    </form>
                </section>`;
}