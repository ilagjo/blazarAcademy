document.addEventListener("DOMContentLoaded", function () {
  const usersTableContainer = document.getElementById("usersTable");

  const table = createTable();

  usersTableContainer.appendChild(table);
  addHeadersToTable(table);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const row = table.insertRow();
        ["name", "username", "email", "phone"].forEach((field) => {
          const cell = row.insertCell();
          cell.innerText = user[field];
        });
      });
    })
    .catch((error) => console.log(error));

  usersTableContainer.appendChild(table);

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap";
  document.head.appendChild(fontLink);

  const h1 = document.createElement("h1");
  h1.innerText = "Tabella Utenti";
  usersTableContainer.insertAdjacentElement("beforebegin", h1);

  const style = document.createElement("style");

  style.innerHTML = `
  h1 {
    text-align: center;
    font-size: 48px;
    font-family: "Caveat", sans-serif;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
    font-size: 0.9em;
    font-family: Arial, sans-serif;
    box-shadow: 0.1em 0.1em 0.4em #f8f40d;
  }

  td {
    text-align: left;
  }

  th,
  td {
    padding: 0.5em;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;
  document.head.appendChild(style);


  /* Fuori richiesta */
  const backButton = document.createElement("button");
  backButton.innerText = "\u2190 Back";
  backButton.style.marginRight = "5px";
  backButton.style.marginBottom = "16px";
  backButton.style.border = "none";
  backButton.style.background = "transparent";
  backButton.style.fontSize = "20px";
  backButton.style.fontFamily = "Caveat";

  const buttonLink = document.createElement("a");
  buttonLink.href = "https://github.com/ilagjo/blazarAcademy";
  buttonLink.style.textDecoration = "none";
  buttonLink.appendChild(backButton);

  const abbr = document.createElement("abbr");
  abbr.title = "back to my repository";
  abbr.appendChild(buttonLink);

  abbr.style.marginBottom = "20px";
  abbr.style.fontSize = "18px";
  abbr.style.padding = "10px 20px";
  abbr.style.borderRadius = "20px";
  abbr.style.background = "#f7d6bf";
  abbr.style.color = "#000000";
  abbr.style.transition = "background-color 0.2s ease-in-out";

  abbr.addEventListener("mouseenter", () => {
    abbr.style.background = "#ffad7d";
    abbr.style.color = "#ffffff";
  });
  abbr.addEventListener("mouseleave", () => {
    abbr.style.background = "#f7d6bf";
    abbr.style.color = "#000000";
  });

  usersTableContainer.insertAdjacentElement("beforebegin", abbr);

});
function addHeadersToTable(table) {
  const headerRow = table.insertRow();
  ["Name", "Username", "Email", "Phone"].forEach((header) => {
    const th = document.createElement("th");
    th.style.textAlign = "center";
    th.style.backgroundColor = "#f5f5f5";
    th.style.color = "#555";
    th.style.fontWeight = "600";
    th.innerText = header;
    headerRow.appendChild(th);
  });
}

function createTable() {
  const table = document.createElement("table");
  const caption = table.createCaption();
  caption.style.captionSide = "bottom";
  caption.style.marginTop = "5px";
  caption.style.padding = "5px";
  caption.style.fontStyle = "italic";
  caption.style.fontSize = "10px";
  caption.innerText = "Tabella Utenti: esercizio javascript - ";
  const link = document.createElement("a");
  link.href = "https://jsonplaceholder.typicode.com/users";
  link.innerText = "fonte dati";
  caption.appendChild(link);
  return table;
}

