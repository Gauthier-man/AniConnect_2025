document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.querySelector(".round_profile");
    const userMenu = document.getElementById("user-menu");
  
    // Simulation : vérifier si l'utilisateur est connecté (ex : localStorage ou session)
    const userLoggedIn = true; // Remplace par une vraie vérification dans ton projet
  
    if (userLoggedIn) {
      // Remplacer les liens pour les utilisateurs connectés
      userMenu.innerHTML = `
        <a href="profil.html">Profil</a>
        <a href="parametres.html">Paramètres du compte</a>
        <a href="logout.html">Déconnexion</a>
      `;
    }
  
    // Toggle du menu utilisateur au clic
    profileIcon.addEventListener("click", function (event) {
      userMenu.classList.toggle("active");
      event.stopPropagation();
    });
  
    // Fermer le menu lorsqu'on clique ailleurs
    document.addEventListener("click", function (event) {
      if (!userMenu.contains(event.target) && !profileIcon.contains(event.target)) {
        userMenu.classList.remove("active");
      }
    });
  });
  