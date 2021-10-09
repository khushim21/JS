const request = require('request');
const cheerio = require('cheerio');
const getIssue = require('./issue');

function getRepo(link,topic){
   request(link,cb);

   function cb(error, response , html){
    if(error){
        console.log(error);
    }else if (response.statusCode == 404) {
        console.log("Page Not Found");
      } else {
        //   console.log(html);
        getRepoLink(html);
      }
}
function getRepoLink(html){
 let $ = cheerio.load(html);
 let headArr = $(".f3.color-text-secondary.text-normal.lh-condensed");
 
 for(let i=0;i<8;i++){
     let anchors = $(headArr[i]).find("a");
     let link = $(anchors[1]).attr("href");
  //  console.log(link);
    // get issues 
    let fullLink =`https://github.com${link}/issues`;
    // console.log(fullLink);
    let repoName = link.split("/").pop();
    getIssue(fullLink,topic,repoName);
    
  }
  // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

}
}


module.exports = getRepo;