import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const createHeader = () => {
  const title = document.createElement("div");
  title.setAttribute("id", "title");
  title.textContent = "The Depot";

  //   title.appendChild(createOptions());

  return title;
};

const createOptions = () => {
  const options = document.createElement("div");
  options.setAttribute("id", "options");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "home");
  homeBtn.classList.add("btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    activateButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menu");
  menuBtn.classList.add("btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    activateButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contact");
  contactBtn.classList.add("btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    activateButton(contactBtn);
    loadContact();
  });

  options.appendChild(homeBtn);
  options.appendChild(menuBtn);
  options.appendChild(contactBtn);

  return options;
};

function activateButton(name) {
  const btns = document.querySelectorAll(".btn");

  btns.forEach((name) => {
    if (name !== this) {
      name.classList.remove("active");
    }
  });

  name.classList.add("active");
}

const createMain = () => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  footer.textContent = "Made for The Odin Project by @khintz34";

  return footer;
};

function intializeRestaurant() {
  const content = document.getElementById("content");

  const container = document.createElement("div");
  container.setAttribute("id", "container");

  content.appendChild(container);

  container.appendChild(createHeader());
  container.appendChild(createOptions());
  container.appendChild(createMain());
  container.appendChild(createFooter());

  activateButton(document.querySelector(".btn"));
  loadHome();
}

export default intializeRestaurant;
