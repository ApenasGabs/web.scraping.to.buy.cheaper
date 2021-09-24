const axios = require("axios");
const cheerio = require("cheerio");
const url =
    "https://www.kabum.com.br/produto/112807/projetor-lg-cinebeam-smart-tv-140-uhd-4k-hdr10-1500-ansi-lumens-hdmi-usb-bluetooth-wi-fi-branco-hu70la";
// const url = "https://www.google.com/search?q=dolar";
console.log("1");
axios(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const resto = $("sc-eQvJSV hZoTdn ").next().text();
        console.log(resto);
    })
    .catch(console.error);
// request(
//     "https://www.google.com/search?q=dolar",
//     (error, response, html) => {
//         if (!error && response.statusCode == 200) {
//             const $ = cheerio.load(html);
//             const resto = $('.a61j6 vk_gy vk_sh Hg3mWc');
//             console.log(resto);
//             console.log("2");
//         }
//     }
// );