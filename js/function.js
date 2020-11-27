
var iznos = document.getElementById('iznos');
var rezultat = document.getElementById('rezultat');
var izValute = document.getElementById('iz-valute');
var uValutu = document.getElementById('u-valutu');

iznos.addEventListener("keyup",mojRezultat);
izValute.addEventListener("change",mojRezultat);
uValutu.addEventListener("change",mojRezultat);

function mojRezultat(){
	var izValuteVrednost = izValute.value;
	var uValutuVrednost = uValutu.value;
	const RSD = "dinar";
	const EUR = "evro";
	const USD = "dolar";
	const CHF = "frank";
// porednjenje valuta

	if(izValuteVrednost === RSD && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * 0.00851;
	}else if(izValuteVrednost === RSD && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * 0.01005;
	}else if(izValuteVrednost === RSD && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * 0.00919;
	}else if(izValuteVrednost === RSD && uValutuVrednost===RSD){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === EUR && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * 117.2218;
	}else if(izValuteVrednost === EUR && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * 0.84402 ;
	}else if(izValuteVrednost === EUR && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * 1.0801;
	}else if(izValuteVrednost === EUR && uValutuVrednost===EUR){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === USD && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * 0.84402;
	}else if(izValuteVrednost === USD && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * 98.938;
	}else if(izValuteVrednost === USD && uValutuVrednost===CHF){
		rezultat.value = Number(iznos.value) * 0.91163;
	}else if(izValuteVrednost === USD && uValutuVrednost===USD){
		rezultat.value = iznos.value
	}

	if(izValuteVrednost === CHF && uValutuVrednost===EUR){
		rezultat.value = Number(iznos.value) * 0.92584;
	}else if(izValuteVrednost === CHF && uValutuVrednost===RSD){
		rezultat.value = Number(iznos.value) * 108.5286;
	}else if(izValuteVrednost === CHF && uValutuVrednost===USD){
		rezultat.value = Number(iznos.value) * 1.09694;
	}else if(izValuteVrednost === CHF && uValutuVrednost===CHF){
		rezultat.value = iznos.value
	}
}

$(document).ready(function () { 

    // FETCHING DATA FROM JSON FILE

    $.getJSON("kursna_lista.json",  
            function (data) { 
        var student = ''; 

        // ITERATING THROUGH OBJECTS 
        $.each(data, function (key, value) { 

            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            student += '<tr>'; 
            student += '<td>' +  
                value.GFGUserName + '</td>'; 

            student += '<td>' +  
                value.NoOfProblems + '</td>'; 

            student += '<td>' +  
                value.TotalScore + '</td>'; 

            student += '<td>' +  
                value.Articles + '</td>'; 

            student += '</tr>'; 
        }); 
          
        //INSERTING ROWS INTO TABLE  
        $('#table').append(student); 
    }); 
}); 