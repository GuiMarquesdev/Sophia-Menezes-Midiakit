
document.getElementById("emailButton").addEventListener("click", function () {
  var destinatario = "Sophiaamenezes10@gmail.com"; // Substitua pelo seu e-mail
  var mailtoLink = "mailto:" + destinatario;
  window.location.href = mailtoLink; // Abre o cliente de e-mail padrão
});
// Mídia Kit (abre outro arquivo HTML)
document
  .getElementById("mediaKitButton")
  .addEventListener("click", function () {
    window.location.href = "midia-kit.html"; // Redireciona para o arquivo midia-kit.html
  });
