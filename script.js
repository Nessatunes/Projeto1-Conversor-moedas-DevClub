const convertButton =
  document.querySelector(".convert-button"); /* mapeando o botao*/
const currencySelect =
  document.querySelector(".currency-select"); /* mapeando a selecao da moeda*/

async function convertValues() {
  const inputCurrencyValue =
    document.querySelector(
      ".input-currency"
    ).value; /* valor digitado no input*/
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); /* valor em Real a converter*/
  const currencyValueConverted =
    document.querySelector(".currency-value"); /* moedas a converter*/

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
  ).then((response) => response.json());

  const dolarToday = data.USDBRL.high;
  const euroToday = data.EURBRL.high;
  const libraToday = data.GBPBRL.high;
  const bitcoinToday = data.BTCBRL.high;

  /* se estiver selecionada dolar vai entrar nesse if*/
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  /* se estiver selecionada euro vai entrar nesse if*/
  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  /* se estiver selecionada libra vai entrar nesse if*/
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  /* se estiver selecionada bitcoin vai entrar nesse if*/
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "$ Dólar Americano";
    currencyImage.src = "./assets/Dolar.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "€ Euro";
    currencyImage.src = "./assets/Euro.png";
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "£ Libra";
    currencyImage.src = "./assets/libra.png";
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "₿ Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
