export default async function fetchCountry(country){

  const flag =  await fetch(`https://countryflagsapi.com/png/${country}`);
  return flag.url;
}