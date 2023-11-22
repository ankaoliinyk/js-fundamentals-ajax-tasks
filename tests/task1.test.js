// Для перевірки треба спочатку запустити сервер через команду npx live-server
// Та потім викликати команду node tests/task1.test.js
// Результатом виклику повинен бути текст: Користувачі відображені на сторінці.

const puppeteer = require('puppeteer');

async function checkUsersDisplayed() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8080/'); 

  
  const userList = await page.$('.usersList');
  await  page.waitForTimeout(3000);

  if (userList) {
    const userItems = await userList.$$('li');

    if (userItems.length > 0) {
      console.log(`Користувачі відображені на сторінці.`);
    } else {
      console.log(`На сторінці немає користувачів.`);
    }
  } else {
    console.log(`Елемент з класом "usersList" не знайдено на сторінці.`);
  }

  await browser.close();
}

checkUsersDisplayed().catch(error => console.error(error));
