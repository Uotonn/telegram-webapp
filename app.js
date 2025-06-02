document.addEventListener("DOMContentLoaded", function() {
  const appContainer = document.getElementById('app');

  if (window.Telegram && Telegram.WebApp) {
    const webApp = Telegram.WebApp;
    webApp.expand();

    window.payStars = function(amount) {
      webApp.sendData(JSON.stringify({
        type: "stars_payment",
        amount: amount
      }));
      webApp.close();
    };

  } else {
    appContainer.innerHTML = `
      <div class="error-message">
        <h2>Откройте через Telegram</h2>
        <p>Для оплаты используйте кнопку в @helpposbot</p>
      </div>
    `;
  }
});
