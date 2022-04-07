function createContactPage() {
  const contactPage = document.createElement("div");
  contactPage.setAttribute("id", "contactPage");

  const contactHeader = document.createElement("H1");
  contactHeader.textContent = "The Depot -- Contact Page";
  contactHeader.setAttribute("id", "contactHeader");
  contactHeader.classList.add("contactItem");

  const contactPhone = document.createElement("div");
  contactPhone.setAttribute("id", "contactPhone");
  contactPhone.textContent = "Phone Number: (555) 555-1234";
  contactPhone.classList.add("contactItem");

  const contactHours = document.createElement("div");
  contactHours.setAttribute("id", "contactHours");
  contactHours.textContent = "Hours of Operations: Daily 11am - 10pm";
  contactHours.classList.add("contactItem");

  const contactAddress = document.createElement("div");
  contactAddress.setAttribute("id", "contactAddress");
  contactAddress.textContent = "Address: 1419 Skippers Lane, Eau Claire, WI";
  contactAddress.classList.add("contactItem");

  const contactMap = document.createElement("div");
  contactMap.setAttribute("id", "contactMap");

  contactPage.appendChild(contactHeader);
  contactPage.appendChild(contactPhone);
  contactPage.appendChild(contactHours);
  contactPage.appendChild(contactAddress);
  contactPage.appendChild(contactMap);

  return contactPage;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContactPage());
}

export default loadContact;
