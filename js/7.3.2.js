const employee = {
  city: "Moscow",
  company: "Sber-Bank",
  name: "Rustem",
  id: 333,
  job: "Front-end Developer",
}

const isBelong = (str, obj) => {
  let result = false;
  for (let key in obj) {
    if (key == str) {
      result = true;
    }
  }
  console.log(result)
}
isBelong("surname", employee);
isBelong("name", employee);