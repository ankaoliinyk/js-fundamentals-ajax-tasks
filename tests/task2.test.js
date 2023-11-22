// Для перевірки треба спочатку запустити сервер через команду npx live-server
// Та потім викликати команду node tests/task2.test.js
// Результатом виклику повинен бути текст: Місто користувача співпадає з очікуваним результатом.

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
  await page.goto('http://127.0.0.1:8080/index.html');


  const userName = 'Leanne Graham'; 
  await page.type('#userNameInput', userName);

  await page.click('#getUserButton');

  await page.waitForTimeout(3000);

  await page.waitForSelector('#userCity');

  const userCity = await page.$eval('#userCity', element => element.textContent);

  if (userCity === 'Gwenborough') {
    console.log(`Місто користувача співпадає з очікуваним результатом: ${userCity}`);
  } else {
    console.log(`Місто користувача не співпадає з очікуваним результатом: ${userCity}`);
  }

  await browser.close();
})();
