export default async function initFetchBtc(url, target) {
  try {
    const btcJson = await (
      await fetch(url)
    ).json();

    const btcPrice = document.querySelector(target);
    btcPrice.innerText = (100 / btcJson.BRL.sell).toFixed(5);
  } catch (error) {
    console.log(Error(error));
  }
}
