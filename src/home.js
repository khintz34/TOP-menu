function createHomePage() {
  const homePage = document.createElement("div");
  homePage.setAttribute("id", "homePage");

  const quote1Div = document.createElement("div");
  quote1Div.classList.add("para");
  quote1Div.setAttribute("id", "quote1Div");

  const quote1 = createQuotes(
    "quote1",
    "The best restaurant on this side of the Mississippi"
  );

  quote1Div.appendChild(quote1);
  homePage.appendChild(quote1Div);

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("para");
  ratingDiv.setAttribute("id", "ratingDiv");

  const rating = document.createElement("img");
  rating.setAttribute("id", "rating");
  rating.src = "rating.png";
  rating.alt = "One Michelin Star";

  ratingDiv.appendChild(rating);
  homePage.appendChild(ratingDiv);

  const quote2Div = document.createElement("div");
  quote2Div.classList.add("para");
  quote2Div.setAttribute("id", "quote2Div");
  const quote2 = createQuotes(
    "quote2",
    "Historic, Delicious, Unforgetable... The Depot"
  );
  quote2Div.appendChild(quote2);
  homePage.appendChild(quote2Div);

  function createQuotes(id, content) {
    const quote = document.createElement("div");
    quote.setAttribute("id", id);
    quote.textContent = content;

    return quote;
  }

  return homePage;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHomePage());
}

export default loadHome;
