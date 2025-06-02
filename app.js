document.addEventListener("DOMContentLoaded", function () {
  const outsideMsg = document.getElementById("outside-message");
  const insideContent = document.getElementById("inside-content");

  if (typeof Telegram === "undefined" || !Telegram.WebApp) {
    outsideMsg.classList.remove("hidden");
    insideContent.classList.add("hidden");
    return;
  }

  Telegram.WebApp.expand();
  outsideMsg.classList.add("hidden");
  insideContent.classList.remove("hidden");

  function sendPayment(option, price) {
    Telegram.WebApp.sendData(JSON.stringify({
      type: "stars_payment",
      option,
      amount: price
    }));
    Telegram.WebApp.close();
  }

  document.getElementById("vacancyBtn").onclick = () => sendPayment("vacancy", 100);
  document.getElementById("advert24Btn").onclick = () => sendPayment("advert_24h", 250);
  document.getElementById("advertForeverBtn").onclick = () => sendPayment("advert_forever", 500);
});
