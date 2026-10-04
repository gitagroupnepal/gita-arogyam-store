document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.querySelector(".cart-count");
  const cartPanel = document.getElementById("cartPanel");
  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const floatingCartBtn = document.getElementById("floatingCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");

  const toggleCart = () => {
    if (cartPanel) cartPanel.classList.toggle("show");
  };

  if (cartToggleBtn) cartToggleBtn.addEventListener("click", toggleCart);
  if (floatingCartBtn) floatingCartBtn.addEventListener("click", toggleCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", () => cartPanel.classList.remove("show"));

  const addButtons = document.querySelectorAll(".add-to-cart, .btn.primary");
  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (cartCount) {
        const current = Number(cartCount.textContent || 0);
        cartCount.textContent = current + 1;
      }
      if (cartPanel) cartPanel.classList.add("show");
    });
  });

  const modal = document.getElementById("productModal");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc = document.getElementById("modalDesc");
  const closeModalBtn = document.getElementById("closeModalBtn");

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".add-to-cart")) return;

      const name = card.dataset.name || "Product";
      const price = card.dataset.price || "0";
      const desc = card.dataset.desc || "Natural wellness product";

      if (modalName) modalName.textContent = name;
      if (modalPrice) modalPrice.textContent = "Rs. " + price;
      if (modalDesc) modalDesc.textContent = desc;
      if (modal) modal.classList.add("show");
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener("click", () => {
    if (modal) modal.classList.remove("show");
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  }

  const authTabs = document.querySelectorAll(".auth-tab");
  const authForms = document.querySelectorAll(".auth-form");
  authTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      authTabs.forEach(t => t.classList.toggle("active", t === tab));
      authForms.forEach(form => {
        const formTarget = form.dataset.form;
        form.style.display = formTarget === target ? "flex" : "none";
      });
    });
  });

  const loginForm = document.querySelector('.auth-form[data-form="login"]');
  if (loginForm) loginForm.style.display = "flex";
});
