(function () {
  const modal = document.getElementById("modal");

  if (!modal) return;

  // ---------- OPEN ----------
  window.openModal = function () {
    modal.classList.remove("hidden");
  };

  // ---------- CLOSE ----------
  window.closeModal = function () {
    modal.classList.add("hidden");
  };

  // ---------- CLICK OUTSIDE ----------
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ---------- ESC KEY ----------
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
})();