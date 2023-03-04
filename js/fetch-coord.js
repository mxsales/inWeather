export default async function fetchCoord(cidade) {
  const dadosCoord = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=5&appid=d086f3ea63c44b5bb6d3e7efdfdb851d`
  );
  const jsonCoord = await dadosCoord.json();
  const coord = [jsonCoord[0].lat, jsonCoord[0].lon];
  return coord;
}
