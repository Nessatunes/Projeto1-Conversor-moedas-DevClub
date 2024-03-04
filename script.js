const convertButton = document.querySelector('.convert-button')/* mapeando o botao*/
const currencySelect = document.querySelector('.currency-select')/* mapeando o seletor da moeda*/

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value /* valor digitado p converter*/
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert')/*valor em reaL para converter*/
  const currencyValueConverted = document.querySelector('.currency-value') /* outras moedas valor convertido*/

  const dolar = 5.2
  const euro = 6.2
  const libra = 6.27

 
  if (currencySelect.value == 'dolar') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: "USD"
    }).format(inputCurrencyValue / dolar)
  }
  if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputCurrencyValue / euro)
  }
/* formatação para as moedas */
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
     style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue)
}

  function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar') {
      currencyName.innerHTML = 'Dólar Americano'
      currencyImage.src = './assets/Dolar.png'
    }

    if (currencySelect.value == 'euro') {
      currencyName.innerHTML = 'Euro'
      currencyImage.src = './assets/Euro.png'
    }
    convertValues() /* converte o valor quando trca a moeda*/
  }

 currencySelect.addEventListener('change', changeCurrency) /*troca a moeda*/
 convertButton.addEventListener('click', convertValues) /* converte o valor*/


