const puppeteer = require("puppeteer");
const produto = `Projetor+LG+CineBeam+Smart+TV+140`;
const myPage = `https://www.google.com/search?q=${produto}`;
console.log(myPage);

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(myPage);
    const resultado = await page.evaluate(() => {
        return document.querySelector(
            "div.pla-unit-container > div > div >div:nth-child(2)"
        );
    });
    console.log(`ainda tem ${resultado} unidades`);
    // await browser.close();
}
robo();