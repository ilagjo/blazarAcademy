document.addEventListener("DOMContentLoaded", () => {
  const usersTableContainer = document.getElementById("usersTable");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Username", "Email", "Phone"].map((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    return th;
  });

  headerRow.append(...headers);
  thead.appendChild(headerRow);
  table.append(thead, tbody);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const rows = users.map((user) => {
        const { name, username, email, phone } = user;
        const values = [name, username, email, phone];
        return Object.values(values).reduce((row, value) => {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
          return row;
        }, document.createElement("tr"));
      });
      tbody.append(...rows);
    })
    .catch((error) => console.error(error));

  const form = document.createElement("form");
  const inputs = [];
  const labels = ["Name", "Username", "Email", "Phone"];
  const inputNames = ["name", "username", "email", "phone"];

  inputNames.forEach((name, index) => {
    const label = document.createElement("label");
    label.textContent = labels[index];
    label.htmlFor = name;

    const input = document.createElement("input");
    input.type = "text";
    input.name = name;
    input.id = name;

    const div = document.createElement("div");
    div.classList.add("form-group");
    div.appendChild(label);
    div.appendChild(input);

    inputs.push(input);
    form.appendChild(div);
  });

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Add User";
  submitButton.disabled = true;

  const isFormValid = () => {
    return inputs.every((input) => input.value.trim() !== "");
  };

  form.addEventListener("input", () => {
    submitButton.disabled = !isFormValid();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {};
    new FormData(form).forEach((value, key) => {
      user[key] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((newUser) => {
        const row = document.createElement("tr");
        const { name, username, email, phone } = newUser;
        [name, username, email, phone].forEach((value) => {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
        });
        tbody.appendChild(row);

        inputs.forEach((input) => {
          if (input.type === "text") {
            input.value = "";
          }
        });

        submitButton.disabled = true;
      })
      .catch((error) => console.error(error));
  });

  form.appendChild(submitButton);
  usersTableContainer.append(table, form);

  const h1 = document.createElement("h1");
  h1.innerText = "Tabella Utenti";
  usersTableContainer.insertAdjacentElement("beforebegin", h1);

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap";
  document.head.appendChild(fontLink);

  const style = document.createElement("style");
  style.textContent = `
h1 {
text-align: center;
font-size: 48px;
font-family: "Caveat", cursive;
}

table, form {font-family: Arial, sans-serif;}
table {
border-collapse: collapse;
width: 100%;
margin: 1em 0;
font-size: 0.9em;
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

th {
text-align: center;
background-color: #f5f5f5;
color: #555;
font-weight: 600;
}

tr:nth-child(even) {
background-color: #f2f2f2;
}

tr:hover {
background-color: #ddd;
}

form {
  border: 1px solid grey;
  border-radius: 5px;
  max-width: 350px;
  margin-top: 20px;
  font-size: 14px;
}

form > * {
  flex: 1 1 calc(25% - 10px);
  margin: 10px;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-group label {
  margin-left: 10px;
  flex: 1;
}

form > button {
  flex: 1 1 100%;
  margin-top: 10px;
  display: block;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 3px grey;
}

input[type="submit"] {
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f7d6bf;
  color: #000000;
  font-weight: bold;
  cursor: not-allowed;
  transition: background-color 0.2s ease-in-out;
}

input[type="submit"]:hover:not([disabled]) {
  background-color: #ffa166;
  color: #ffffff;
  cursor: pointer;
}
`;
  document.head.appendChild(style);

});
