var prikazRezultata = document.getElementById('prikazRezultata');

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

function konvertuj(){
  var iznos = document.getElementById('iznos').value;
  var izValute = document.getElementById('iz-valute').value;
  var uValutu = document.getElementById('u-valutu').value;

  let vrednostIzValute = valute.find(v => v.oznakaValute === izValute);
  let vrednostUValutu = valute.find(v => v.oznakaValute === uValutu);
  let odnosValuta = vrednostUValutu.srednjiKurs / vrednostIzValute.srednjiKurs;
  let rezultat = odnosValuta * iznos;
  return rezultat;
}

function izracunaj() {
  var rezultat = konvertuj();

  prikazRezultata.innerHTML = rezultat;
}