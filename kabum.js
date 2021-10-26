const puppeteer = require("puppeteer");
const listaProduto = [{
    'Projetor LG CineBeam Smart TV 140': 112807
}, { 'playstation 5 ': 181395 }];

const produto = listaProduto[0]["Projetor LG CineBeam Smart TV 140"];

const myPage = `https://www.kabum.com.br/produto/${produto}/`;
console.log(myPage);
async function kabum() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(myPage);
    const resultado = await page.evaluate(() => {
        return document.querySelector("#blocoValores > div > div > h4").textContent;
    });
    let edit = resultado.split("R$");
    console.log(`O produto que voce quer Esta custando ${edit[1]}`);
    await browser.close();
    return edit;
}
kabum();
module.exports = kabum;