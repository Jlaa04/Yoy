/* ========================================
   FRANCHISE.JS — Formulaire franchise + toast
   ======================================== */

(function initFranchiseForm() {
  var form = document.getElementById("franchiseForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    /* Afficher le toast */
    var toast = document.getElementById("toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(function () {
        toast.classList.remove("show");
      }, 4000);
    }
    /* Réinitialiser le formulaire */
    this.reset();
  });
})();
