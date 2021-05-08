import faker from "faker";

const mount = (el) => {
  let getRandomNumber = () => {
    let randomNumber = faker.random.number({
      min: 10,
      max: 50,
    });

    return randomNumber;
  };

  let cartDetails = `you have ${getRandomNumber()} items in the cart`;

  el.innerHTML = cartDetails;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#remote-cart");

  if (el) {
    mount(el);
  }
}

export { mount };
