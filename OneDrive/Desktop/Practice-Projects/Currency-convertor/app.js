const worthfirstEl=document.getElementById("worth-first");
const currencyfirstEl=document.getElementById("currency-first");
const worthsecondEl=document.getElementById("worth-second");
const currencysecondEl=document.getElementById("currency-second");
const exchangerateEl=document.getElementById("exchange-rate");
updateRate();
function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/bb18b00fe89c048865e446ac/latest/${currencyfirstEl.value}`

    )
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencysecondEl.value];
        console.log(rate);
        exchangerateEl.innerText=`1${currencyfirstEl.value}= ${rate + " "+currencysecondEl.value}`;
        worthsecondEl.value=(worthfirstEl.value * rate).toFixed(2)
    });
}
currencyfirstEl.addEventListener("change" ,updateRate);
currencysecondEl.addEventListener("change",updateRate);
 worthfirstEl.addEventListener("input", updateRate);
