document.addEventListener('DOMContentLoaded', function () {
  const outsideMsg = document.getElementById('outside-message');
  const insideContent = document.getElementById('inside-content');

  // Проверяем, запущено ли внутри Telegram
  if (typeof Telegram === 'undefined' || !Telegram.WebApp) {
    outsideMsg.style.display = 'block';
    insideContent.style.display = 'none';
    return;
  }

  // Telegram WebApp инициализация
  const webApp = Telegram.WebApp;
  webApp.expand();
  insideContent.style.display = 'block';

  // Функция отправки данных
  function sendOptionData(option, price) {
    const data = {
      type: "stars_payment",
      option: option,
      amount: price
    };
    webApp.sendData(JSON.stringify(data));
    webApp.close();
  }

  // Обработчики кнопок
  document.getElementById('vacancyBtn').addEventListener('click', () => {
    sendOptionData('vacancy', 100);
  });

  document.getElementById('advert24Btn').addEventListener('click', () => {
    sendOptionData('advert_24h', 250);
  });

  document.getElementById('advertForeverBtn').addEventListener('click', () => {
    sendOptionData('advert_forever', 500);
  });
});
