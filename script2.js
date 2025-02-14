document.querySelector("form").addEventListener("submit", function (e) {
    event.preventDefault(); // Empêche l'envoi par defaut du formulaire
    
    //Réinitialiser les erreurs précédentes

    document.querySelectorAll(".error-message").forEach(msg => msg.remove());
    document.querySelectorAll("input, textarea, select").forEach(input => {
      input.style.border = "1px solid #ccc";
    });

    let hasError = false;

    // Vérification des champs
    const fields = [
      { id: "prenom", name: "Prénom" },
      { id: "nom", name: "Nom" },
      { id: "email", name: "Email" },
      { id: "telephone", name: "Numéro de téléphone" },
      { id: "sujet", name: "Message" },
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      if (!input.value.trim() || (field.id === "sujet" && input.value === "Sélectionnez un...")) {
        showError(input, `${field.name} est obligatoire.`);
        hasError = true;
      }
    });

    // Vérification des conditions
    const conditions = document.getElementById("conditions");
    if (!conditions.checked) {
      showError(conditions, "Vous devez accepter les conditions.");
      hasError = true;
    }

    if (!hasError) {
      alert("Formulaire soumis avec succès !");
      // Ici vous pouvez soumettre le formulaire si nécessaire
    }
  });

  function showError(element, message) {
    element.style.border = "1px solid red";
    const error = document.createElement("span");
    error.className = "error-message";
    error.style.color = "red";
    error.textContent = message;
    element.parentElement.appendChild(error);
  }
  