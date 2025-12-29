// Botão de Parceria (agora abre o E-mail)
document
  .getElementById("parceriaButton")
  .addEventListener("click", function () {
    var destinatario = "Sophiaamenezes10@gmail.com"; // Seu e-mail
    var assunto = "Proposta de Parceria - Sophia Menezes"; // Assunto sugestivo
    var mailtoLink =
      "mailto:" + destinatario + "?subject=" + encodeURIComponent(assunto);

    window.location.href = mailtoLink; // Abre o cliente de e-mail padrão
  });

// Mídia Kit (abre outro arquivo HTML)
document
  .getElementById("mediaKitButton")
  .addEventListener("click", function () {
    window.location.href = "midia-kit.html"; // Redireciona para o arquivo midia-kit.html
  });
