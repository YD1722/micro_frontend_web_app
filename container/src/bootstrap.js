import { mount as productsMount } from "products/productsIndex";
import { mount as cartMount } from "cart/cartDetails";

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
