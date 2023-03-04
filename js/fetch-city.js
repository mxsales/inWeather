export default async function fetchCity(coord) {
  const dadosCidade = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&lang=pt_br&appid=d086f3ea63c44b5bb6d3e7efdfdb851d`
  );
  const dadosJson = await dadosCidade.json();
  const values = {
    name: dadosJson.name,
    status: dadosJson.weather[0].description,
    temp: (dadosJson.main.temp - 273).toFixed(),
    feels: (dadosJson.main.feels_like - 273).toFixed(),
    hum: dadosJson.main.humidity,
    country: dadosJson.sys.country
  }
  return values;
}
