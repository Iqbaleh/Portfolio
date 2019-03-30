
var quotes =
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

];






/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.


***/
function getRandomQuote(){
Math.floor(Math.random()* (quotes.length))
return quotes [getRandomQuote]

}

var randomcolor;
function getRandomColor
Math.floor(Math.Random()) * RBG);


function printQuote(){
var printIt = getRandomQuote;
var printHTML = '';

<p class="quote">randomQuote.quote


if(randomQuote.quote) {
  +=<span class = quotes.citation + printIt </span>
  else {
    +=<span class = "Unknown" + printIt  </span>

      </p>
  }
}
if(randomQuote.source)

{
  +=<span class = quotes.source + printIt </span>
  else{
    +=<span class = "Unknown" + printIt </span>
</p>

  }


}


document.getElementById("quote-box").innerHTML = printHTML;



/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
