request = require("request"),
cheerio = require("cheerio"),
    url = "http://spun.fkpkzs.ru/Level/Gorny";

//Seloctor for needed dom elmetnt:
//#waterleveltable > table > tbody > tr:nth-child(2) > td.value > span
//#waterleveltable > table > tbody > tr:nth-child(2) > td.timestampvalue > span



request(url, function (error, response, html) {
    if (!error) {
        var $ = cheerio.load(html),
            height = $("#waterleveltable td.value").first().text();
            time = $("#waterleveltable td.timestampvalue").first().text();

        console.log(time + " Высота воды " + height + " см");
    } else {
        console.log("Произошла ошибка: " + error);
    }
});
/*
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>
*/