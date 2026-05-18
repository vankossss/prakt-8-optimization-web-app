export function ProductCard(product) {
    return `<div class="item-card" data-id="${product.id}">
    <img src="${product.thumbnail}" alt="${product.title}" class="item-image" loading="lazy" decoding="async" style="width: 100%; height: auto;">
    <div class="item-info">
        <span>${product.title}</span>
        <b>${product.price}$</b>
        </div>
    </div>`;
}