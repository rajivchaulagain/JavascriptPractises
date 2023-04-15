const usdDollar = document.getElementById("usd-dollar");
const nepRupees = document.getElementById("nep-dollar");
const converter = document.getElementById("converter");
const result = document.getElementById("result");

function isPlural (value) {
    if(Number(value) > 1){
        return 's'
    }
    else {
        return ''
    }
}

function converterFnc() {
    if(!usdDollar.value || usdDollar.value == 0){
        alert('please add USD currency')
        return
    }
  nepRupees.value = (Number(usdDollar.value) * 132).toFixed(3);
  result.innerText = `The USD dollar${isPlural(usdDollar.value)} ${usdDollar.value} is equal to  ${Number(usdDollar.value) * 132} nepali rupee${isPlural(nepRupees.value)}`
}

function reverseFnc() {
    if(!usdDollar.value || usdDollar.value == 0){
        alert('please add USD currency')
        return
    }
  nepRupees.value = usdDollar.value;
  usdDollar.value = (Number(nepRupees.value) / 132).toFixed(3);
  result.innerText = `The Nepali rupee${isPlural(nepRupees.value)} ${nepRupees.value} is equal to ${(Number(nepRupees.value) / 132).toFixed(3)} usd dollar${isPlural(usdDollar.value)}`
}
