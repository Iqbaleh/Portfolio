
var theQuotes =
[
  {


quote: "Never let me slip, cause if I slip, then I'm slippin.",
source: "The Source",
citation: "DR DRE",
year: "Unknown",
},
{
quote: "I take a flight to Spain just to heat a baked potato",
source: "Chingy",
citation: "Unknown",
year: "1999",
},
{
quote: "Test quote",
source: "RIFF RAFF",
citation: "",
year: "",


}

,
{
quote: "Drake",
source: "Drakee",
citation: "ok",
year: "",


}

,
{
quote: "test",
source: "testt",
citation: "",
year: "",


}
,
{
quote: "Test quote",
source: "RIFF RAFF",
citation: "",
year: "",


}

];

 // ok virker her til


function getRandomFunction(){
var randomNum = theQuotes.length;
return Math.floor(Math.random() * randomNum);




}

function printQuote(){
var printer = getRandomFunction();
    var printonHTML = "";
    printonHTML += '<p class="quotes">' + printer.quote + '</p>';
    printonHTML += '<p class="source">' + printer.source;

          if (printer.citation) {

          printonHTML +=  '<span class="citation">' + printer.citation + '</span>';
          }
            if (printer.year) {
          printonHTML +=  '<span class="year">' + printer.year + '</span>';

          }
printonHTML += '</p>'
console.log(printonHTML); //it doesnt print out anything at all

document.getElementById("quote-box").innerHTML = printonHTML;

document.getElementById("loadQuote").addEventListener("click", printQuote, false);

}
