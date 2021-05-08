import faker from "faker";

let getRandomNumber = () => {
    let randomNumber = faker.random.number({
        min: 10,
        max: 50,
    });

    return randomNumber;
};

document.querySelector(
    "#dev-cart"
).innerHTML = `you have ${getRandomNumber()} item in the cart`;
