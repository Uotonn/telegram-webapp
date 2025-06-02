document.addEventListener('DOMContentLoaded', function() {
  const outsideMsg = document.getElementById('outside-message');
  const insideContent = document.getElementById('inside-content');

  // Проверяем, запущено ли WebApp внутри Telegram
  if (typeof Telegram === 'undefined' || !Telegram.WebApp) {
    // Если нет — показываем заглушку и прячем основной контент
    outsideMsg.style.display = 'flex';
    insideContent.style.display = 'none';
    return;
  }

  // Функция отправки данных выбранного варианта боту
  function sendOptionData(option, price) {
    const data = { option: option, price: price };
    // Отправляем данные боту и автоматически закрываем WebApp:contentReference[oaicite:2]{index=2}
    Telegram.WebApp.sendData(JSON.stringify(data));
  }

  // Назначаем обработчики кликов на кнопки
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
