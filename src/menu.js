function createMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menuPage");

  // grid container
  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "gridContainer");

  // menuHeader
  const menuHeader = document.createElement("div");
  menuHeader.setAttribute("id", "menuHeader");
  menuHeader.textContent = "The Depot -- Menu";
  gridContainer.appendChild(menuHeader);

  // Pizza Items

  const pizzaItem = document.createElement("div");
  pizzaItem.setAttribute("id", "pizzaItem");
  pizzaItem.classList.add("foodItem");

  const pizzaName = document.createElement("div");
  pizzaName.setAttribute("id", "pizzaName");
  pizzaName.classList.add("foodName");
  pizzaName.textContent = "Peppa Pig Pizza";

  const pizzaBody = document.createElement("div");
  pizzaBody.setAttribute("id", "pizzaBody");
  pizzaBody.classList.add("foodBody");
  pizzaBody.textContent =
    "Perfectly baked pizza with a cheese crust topped with home made italian sauce and Peppa Pig Bacon";

  pizzaItem.appendChild(pizzaName);
  pizzaItem.appendChild(pizzaBody);
  gridContainer.appendChild(pizzaItem);

  // Depot Burger

  const burgerItem = document.createElement("div");
  burgerItem.setAttribute("id", "burgerItem");
  burgerItem.classList.add("foodItem");

  const burgerName = document.createElement("div");
  burgerName.setAttribute("id", "burgerName");
  burgerName.classList.add("foodName");
  burgerName.textContent = "The Depot Burger";

  const burgerBody = document.createElement("div");
  burgerBody.setAttribute("id", "burgerBody");
  burgerBody.classList.add("foodBody");
  burgerBody.textContent =
    "A 1/2lb burger flame grilled with heapings of cheese curds, onion rings and BBQ sauce on top";

  burgerItem.appendChild(burgerName);
  burgerItem.appendChild(burgerBody);
  gridContainer.appendChild(burgerItem);

  // Cree Crunch Roll

  const crunchItem = document.createElement("div");
  crunchItem.setAttribute("id", "crunchItem");
  crunchItem.classList.add("foodItem");

  const crunchName = document.createElement("div");
  crunchName.setAttribute("id", "crunchName");
  crunchName.classList.add("foodName");
  crunchName.textContent = "The Cree Crunch Roll";

  const crunchBody = document.createElement("div");
  crunchBody.setAttribute("id", "crunchBody");
  crunchBody.classList.add("foodBody");
  crunchBody.textContent =
    "Delicious sushi crunch roll with Ahi Tuna, avacado, crispy wonton flakes, topped with Cane's sauce";

  crunchItem.appendChild(crunchName);
  crunchItem.appendChild(crunchBody);
  gridContainer.appendChild(crunchItem);

  // Whole 30 Hash

  const hashItem = document.createElement("div");
  hashItem.setAttribute("id", "hashItem");
  hashItem.classList.add("foodItem");

  const hashName = document.createElement("div");
  hashName.setAttribute("id", "hashName");
  hashName.classList.add("foodName");
  hashName.textContent = "The Whole 30 Hash";

  const hashBody = document.createElement("div");
  hashBody.setAttribute("id", "hashBody");
  hashBody.classList.add("foodBody");
  hashBody.textContent =
    "A Whole 30 diet friendly hash made up of zuchinni, ground turkey, apples, onions, and peppers";

  hashItem.appendChild(hashName);
  hashItem.appendChild(hashBody);
  gridContainer.appendChild(hashItem);

  // Taco

  const tacoItem = document.createElement("div");
  tacoItem.setAttribute("id", "tacoItem");
  tacoItem.classList.add("foodItem");

  const tacoName = document.createElement("div");
  tacoName.setAttribute("id", "tacoName");
  tacoName.classList.add("foodName");
  tacoName.textContent = "Street Taco";

  const tacoBody = document.createElement("div");
  tacoBody.setAttribute("id", "tacoBody");
  tacoBody.classList.add("foodBody");
  tacoBody.textContent =
    "Authentic street tacos with carne asada, queso, onions, and cilantro";

  tacoItem.appendChild(tacoName);
  tacoItem.appendChild(tacoBody);
  gridContainer.appendChild(tacoItem);

  // Cake

  const cakeItem = document.createElement("div");
  cakeItem.setAttribute("id", "cakeItem");
  cakeItem.classList.add("foodItem");

  const cakeName = document.createElement("div");
  cakeName.setAttribute("id", "cakeName");
  cakeName.classList.add("foodName");
  cakeName.textContent = "Chocolate Lava Cake";

  const cakeBody = document.createElement("div");
  cakeBody.setAttribute("id", "cakeBody");
  cakeBody.classList.add("foodBody");
  cakeBody.textContent =
    "Moist chocolate cake filled with gooey, oozing fudge served with vanilla ice cream";

  cakeItem.appendChild(cakeName);
  cakeItem.appendChild(cakeBody);
  gridContainer.appendChild(cakeItem);

  menuPage.appendChild(gridContainer);

  return menuPage;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenuPage());
}

export default loadMenu;
