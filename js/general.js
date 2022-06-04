/*

  General & misc functions and scripture.

*/

// Show date in a terminal window.

let terminalDate = document.getElementById('terminaldate');
if (terminalDate != null) {
  terminalDate.innerHTML = new Date().toUTCString();
}

navhandle.addEventListener('click', (ev) => {
  nav.classList.toggle('open');
});




// Finds elements named "QuoteContainer" on this page, and fills them with a api fetched quote.

async function getQuotes() {
  let lblsQuotes = Array.from(document.getElementsByClassName("QuoteContainer"))
  console.log(lblsQuotes)
  if (lblsQuotes == null) return;

  let response = await fetch('https://api.quotable.io/quotes');
  let quotes = await response.json();
  quotes = quotes.results

  let index = 0;
  lblsQuotes.forEach(label => {
    let quote = quotes[index]

    label.innerHTML = "\"" + quote.content + "\"<br><br> - " + quote.author;

    index++;
    if (index >= quotes.size) {
      console.error('There are more quote labels than quotes returned by the API!')
      index = 0
    }
  });
}

getQuotes();



// Show age in any 'ageContainer' id'd element.

let lblAge = document.getElementById("ageContainer");

if (lblAge != null) {

  let today = new Date();
  let birthDate = new Date("04/12/2000");
  
  let age = today.getFullYear() - birthDate.getFullYear();

  let m = today.getMonth() - birthDate.getMonth();
  if ((birthDate.getDate() > today.getDate() && m === 0) || m < 0)
      age--;
  
  lblAge.innerHTML = age;
}