// Botão de Parceria Inteligente (Web no iPhone, App no Android/PC)
document.getElementById("emailButton").addEventListener("click", function () {
  var destinatario = "Sophiaamenezes10@gmail.com";
  var assunto = "Proposta de Parceria - Sophia Menezes";

  // Verifica se o usuário está usando iPhone, iPad ou iPod
  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isIOS) {
    // SE FOR IPHONE: Abre o Gmail no navegador para evitar o erro de "Instalar Mail"
    var linkGmailWeb =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      destinatario +
      "&su=" +
      encodeURIComponent(assunto);
    window.open(linkGmailWeb, "_blank");
  } else {
    // SE FOR ANDROID OU PC: Usa o método padrão (abre o App de e-mail ou Outlook)
    window.location.href =
      "mailto:" + destinatario + "?subject=" + encodeURIComponent(assunto);
  }
});

// Botão do Mídia Kit (Redireciona para a página do kit)
document
  .getElementById("mediaKitButton")
  .addEventListener("click", function () {
    window.location.href = "midia-kit.html";
  });
