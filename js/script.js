import fetchCity from "./fetch-city.js";
import fetchCoord from "./fetch-coord.js";
import showData from "./show-data.js";

const cidade = document.querySelector(".input-cidade");
const buscaCidade = async (event) => {
  const local = event.target.value;
  const coord = await fetchCoord(local);
  const dadosCidade = await fetchCity(coord);
  showData(dadosCidade);
  // console.log(dadosCidade)
};

cidade.addEventListener("change", buscaCidade);
