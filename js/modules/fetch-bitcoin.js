export default function initFetchBitcoin() { }

fetch("https://blockchain.info/ticker")
  .then((res) => res.json())
  .then((json) => json.BRL)
  .then((BRL) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerHTML = (1000 / BRL.sell).toFixed(4);
  })
  .catch((erro) => console.log(Error(erro)));

// https://blockchain.info/ticker
