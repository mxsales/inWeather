export default async function fetchCountry(country){

  const flag =  await fetch(`https://flagsapi.com/${country}/flat/64.png`);
  return flag.url;
}