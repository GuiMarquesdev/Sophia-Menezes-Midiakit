// Botão de Parceria (agora abre o E-mail)
document
  .getElementById("parceriaButton")
  .addEventListener("click", function () {
    var destinatario = "Sophiaamenezes10@gmail.com"; // Seu e-mail
    var assunto = "Proposta de Parceria - Sophia Menezes"; // Assunto sugestivo

    // Cria o link para abrir a composição de e-mail do Gmail na Web
    var gmailLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      destinatario +
      "&su=" +
      encodeURIComponent(assunto);

    // window.open é melhor aqui pois abre em uma nova aba/janela,
    // mantendo seu site aberto para o usuário.
    window.open(gmailLink, "_blank");
  });

// Mídia Kit (abre outro arquivo HTML)
document
  .getElementById("mediaKitButton")
  .addEventListener("click", function () {
    window.location.href = "midia-kit.html"; // Redireciona para o arquivo midia-kit.html
  });
