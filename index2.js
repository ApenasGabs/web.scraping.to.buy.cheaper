const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
const produto = `Projetor+LG+CineBeam+Smart+TV+140`;
const url = `https://www.google.com/search?q=${produto}`;
// const url = "https://www.kabum.com.br/produto/112807/projetor-lg-cinebeam-smart-tv-140-uhd-4k-hdr10-1500-ansi-lumens-hdmi-usb-bluetooth-wi-fi-branco-hu70la";

console.log("1");
// axios(url)
//     .then((response) => {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         const resto = $("top-pla-group-inner").next().text();
//         console.log(resto);
//     })
//     .catch(console.error);
request(`${url}`, (error, response, html) => {
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);
        const carrocel = $("div.pla-unit-container > div > div >div:nth-child(2)");
        console.log(carrocel.html());
        console.log("2");
    }
});