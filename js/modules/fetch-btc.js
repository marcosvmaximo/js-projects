export default async function initFetchBtc() {
  try {
    const btcJson = await (
      await fetch("https://blockchain.info/ticker")
    ).json();

    const btcPrice = document.querySelector(".btc-preco");
    btcPrice.innerText = (100 / btcJson.BRL.sell).toFixed(5);
  } catch (error) {
    console.log(Error(error));
  }
}

// https://blockchain.info/ticker
