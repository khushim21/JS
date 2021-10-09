const url = "https://github.com/topics";
const request = require('request');
const cheerio = require('cheerio');
const getRepo = require("./repo");
request(url,cb);

function cb(error, response , html){
    if(error){
        console.log(error);
    }else if (response.statusCode == 404) {
        console.log("Page Not Found");
      } else {
        getTopicLinks(html);
      }
}
// get the links of the topics.
function getTopicLinks(html){
  let $ = cheerio.load(html);
  let linkArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
   for(let i=0;i<linkArr.length;i++){
      let link = $(linkArr[i]).attr("href");
      let topic=link.split("/").pop();
      let fullLink =`https://github.com/${link}`;
    //   console.log(fullLink);
      getRepo(fullLink,topic);
}
}