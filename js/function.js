
var iznos = document.getElementById('iznos');
var rezultat = document.getElementById('rezultat');
var izValute = document.getElementById('iz-valute');
var uValutu = document.getElementById('u-valutu');
var izracunaj = document.getElementById('izracunaj');
var prikazRezultata = document.getElementById('prikazRezultata');

izracunaj.addEventListener("click",mojRezultat);

class Valuta {
    constructor(oznakaValute, sifraValute, nazivZemlje, vaziZa, srednjiKurs) {
        this.oznakaValute = oznakaValute;
        this.sifraValute = sifraValute;
        this.nazivZemlje = nazivZemlje;
        this.vaziZa = vaziZa;
        this.srednjiKurs = srednjiKurs;
    }
}

let mydata = JSON.parse(data);
let valute = mydata.map(valuta => new Valuta(valuta["oznakaValute"], valuta["sifraValute"], valuta["nazivZemlje"], valuta["vaziZa"], valuta["srednjiKurs"]));

let listaSrednjihKurseva = []; //Empty arrey populate
console.log(listaSrednjihKurseva);

mydata.forEach(function(data) {
    let sKurs = new Valuta(data["oznakaValute"], data["sifraValute"], data["nazivZemlje"], data["vaziZa"], data["srednjiKurs"]);
    listaSrednjihKurseva.push(sKurs);
});

const RSD = "dinar";
const EUR = "evro";
const USD = "dolar";
const CHF = "frank";

let vrednostEvra = valute.find(v => v.sifraValute === 978);
let vrednostDolara = valute.find(v => v.sifraValute === 840);
let vrednostFranka = valute.find(v => v.sifraValute === 756);

function mojDinar(){
	if (izValute.value == RSD && uValutu.value == EUR){
		rezultat.value = (Number(iznos.value) / Number(vrednostEvra.srednjiKurs)).toFixed(4)
   }if (izValute.value === RSD && uValutu.value === USD){
		rezultat.value = (Number(iznos.value) / Number(vrednostDolara.srednjiKurs)).toFixed(4)
   }if (izValute.value === RSD && uValutu.value === CHF){
		rezultat.value = (Number(iznos.value) / Number(vrednostFranka.srednjiKurs)).toFixed(4)
   }if (izValute.value === RSD && uValutu.value === RSD){
		rezultat.value = Number(iznos.value).toFixed(4)
    }
}
function mojEvro(){
	if(izValute.value === EUR && uValutu.value === RSD){
		rezultat.value = (Number(iznos.value) * Number(vrednostEvra.srednjiKurs)).toFixed(4)
    }if(izValute.value === EUR && uValutu.value === USD){
	   rezultat.value = (Number(iznos.value) * Number(vrednostEvra.srednjiKurs / vrednostDolara.srednjiKurs)).toFixed(4)
    }if(izValute.value === EUR && uValutu.value === CHF){
	  rezultat.value = (Number(iznos.value) * Number(vrednostEvra.srednjiKurs / vrednostFranka.srednjiKurs)).toFixed(4)
    } if(izValute.value === EUR && uValutu.value === EUR){
		rezultat.value = Number(iznos.value).toFixed(4)
    }
}

function mojDolar(){
	if(izValute.value === USD && uValutu.value === EUR){
		rezultat.value = (Number(iznos.value) * Number(vrednostDolara.srednjiKurs / vrednostEvra.srednjiKurs)).toFixed(4)
    }if(izValute.value === USD && uValutu.value === RSD){
		rezultat.value = (Number(iznos.value) * Number(vrednostDolara.srednjiKurs)).toFixed(4)
    } if(izValute.value === USD && uValutu.value === CHF){
		rezultat.value = (Number(iznos.value) * Number(vrednostDolara.srednjiKurs / vrednostFranka.srednjiKurs)).toFixed(4)
    } if(izValute.value === USD && uValutu.value === USD){
	   rezultat.value = Number(iznos.value).toFixed(4)
  }
}

function mojFranak(){
	if(izValute.value === CHF && uValutu.value === EUR){
		rezultat.value = (Number(iznos.value) * Number(vrednostFranka.srednjiKurs / vrednostEvra.srednjiKurs)).toFixed(4)
    }if(izValute.value === CHF && uValutu.value === RSD){
		rezultat.value = (Number(iznos.value) * Number(vrednostFranka.srednjiKurs)).toFixed(4)
    }if(izValute.value === CHF && uValutu.value === USD){
		rezultat.value = (Number(iznos.value) * Number(vrednostFranka.srednjiKurs / vrednostDolara.srednjiKurs)).toFixed(4)
    }if(izValute.value === CHF && uValutu.value === CHF){
		rezultat.value = Number(iznos.value).toFixed(4)
   }
}
function mojRezultat(){
	mojDinar()
	mojEvro()
	mojDolar()
	mojFranak()
	prikazRezultata.innerHTML = rezultat.value;
}
