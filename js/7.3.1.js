const employee = {
  city: "Moscow",
  company: "Sber-Bank",
}

function getOwnKeys(obj) {
  const person = Object.create(obj);
  person.name = "Rustem";
  person.id = 333;
  person.job = "Front-end Developer";

  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(key + " - " + person[key]);
    }
  }
}

getOwnKeys(employee);
