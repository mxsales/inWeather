import fetchCountry from "./fetch-country.js";
export default async function showData(dados) {
  const status = document.getElementById("status");
  const temp = document.getElementById("temp");
  const feels = document.getElementById("feels");
  const country = document.getElementById("country");
  const flag = await fetchCountry(dados.country);
  country.setAttribute("src", flag);
  status.innerText = dados.status;
  temp.innerText = dados.temp + "°";
  feels.innerText = dados.feels + "°";
  hum.innerText = dados.hum + "%";
}
