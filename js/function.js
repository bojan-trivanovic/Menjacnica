
var iznos = document.getElementById('iznos');
var rezultat = document.getElementById('rezultat');
var izValute = document.getElementById('iz-valute');
var uValutu = document.getElementById('u-valutu');

iznos.addEventListener("keyup",mojRezultat);
izValute.addEventListener("change",mojRezultat);
uValutu.addEventListener("change",mojRezultat);

function mojRezultat(){
	var mydata = JSON.parse(data);
	
	var vrednostDinara = 1;
	var vrednostEvra = mydata[0]["SREDNJI KURS"];
	var vrednostDolara = mydata[15]["SREDNJI KURS"];
	var vrednostFranka = mydata[13]["SREDNJI KURS"];
	
	var odnosValutaDinarEvro = vrednostDinara / vrednostEvra;
	var odnosValutaDinarDolar = vrednostDinara / vrednostDolara;
	var odnosValutaDinarFrank = vrednostDinara / vrednostFranka;
	
	var odnosValutaEvroDolar = vrednostEvra / vrednostDolara;
	var odnosValutaEvroFrank = vrednostEvra / vrednostFranka;

	var odnosValutaDolarEvro = vrednostDolara / vrednostEvra;
	var odnosValutaDolarFrank = vrednostDolara / vrednostFranka;

	var odnosValutaFrankEvro = vrednostFranka / vrednostEvra;
	var odnosValutaFrankDolar = vrednostFranka / vrednostDolara;
	
	var izValuteVrednost = izValute.value;
	var uValutuVrednost = uValutu.value;
	
	const RSD = "dinar";
	const EUR = "evro";
	const USD = "dolar";
	const CHF = "frank";

// porednjenje valuta
	if(izValuteVrednost === RSD && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * Number(odnosValutaDinarEvro);
	}else if(izValuteVrednost === RSD && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * Number(odnosValutaDinarDolar);
	}else if(izValuteVrednost === RSD && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * Number(odnosValutaDinarFrank);
	}else if(izValuteVrednost === RSD && uValutuVrednost===RSD){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === EUR && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * Number(vrednostEvra);
	}else if(izValuteVrednost === EUR && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * Number(odnosValutaEvroDolar);
	}else if(izValuteVrednost === EUR && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * Number(odnosValutaEvroFrank);
	}else if(izValuteVrednost === EUR && uValutuVrednost===EUR){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === USD && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * Number(odnosValutaDolarEvro);
	}else if(izValuteVrednost === USD && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * Number(vrednostDolara);
	}else if(izValuteVrednost === USD && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * Number(odnosValutaDolarFrank);
	}else if(izValuteVrednost === USD && uValutuVrednost===USD){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === CHF && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * Number(odnosValutaFrankEvro);
	}else if(izValuteVrednost === CHF && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * Number(vrednostFranka);
	}else if(izValuteVrednost === CHF && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * Number(odnosValutaFrankEvro);
	}else if(izValuteVrednost === CHF && uValutuVrednost===CHF){
		rezultat.value = iznos.value
	}

	var rezultatVrednost = Number(rezultat.value);
	var rezultatVrednostDecimal = (Math.round(rezultatVrednost * 100) / 100).toFixed(4);
	console.log(rezultatVrednostDecimal);
	document.getElementById("rezultat").value = rezultatVrednostDecimal;
}


$(document).ready(function () {
	var mydata = JSON.parse(data);
	console.log(mydata);
	console.log(mydata[0]);
});