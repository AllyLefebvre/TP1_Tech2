document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = form.nom.value.trim();
    const prenom = form.prenom.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    function emailValide(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    messageBox.style.color = "red";

    if (!nom || !prenom || !email || !message) {
      messageBox.textContent = "Veuillez remplir tous les champs.";
    } else if (!emailValide(email)) {
      messageBox.textContent = "L'adresse email n'est pas valide.";
    } else {
      messageBox.style.color = "green";
      messageBox.textContent = "Formulaire validé avec succès !";
    }
  });
});
