document.addEventListener('DOMContentLoaded', function() {
  const outsideMsg = document.getElementById('outside-message');
  const insideContent = document.getElementById('inside-content');

  if (typeof Telegram === 'undefined' || !Telegram.WebApp) {
    outsideMsg.style.display = 'flex';
    insideContent.style.display = 'none';
    return;
  }

  Telegram.WebApp.expand(); // Растягиваем окно

  function sendOptionData(option, price) {
    const data = {
      type: "stars_payment",
      amount: price
    };
    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close();
  }

  document.getElementById('vacancyBtn').addEventListener('click', function() {
    sendOptionData('vacancy', 100);
  });
  document.getElementById('advert24Btn').addEventListener('click', function() {
    sendOptionData('advert_24h', 250);
  });
  document.getElementById('advertForeverBtn').addEventListener('click', function() {
    sendOptionData('advert_forever', 500);
  });
});
