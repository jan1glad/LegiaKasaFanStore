
let doPrzodu =1 , doTylu =1;

let sumaDuza = 0, sumaMala=0;

let sumaCalkowitaGotowki = sumaDuza+sumaMala;

let zero_50 = 0;
let zero_20 = 0;
let zero_10 = 0;

let obliczenie = 0;

let date;
let selectKasa;
let ileRano = 0;
let ileKorekty = 0;
let ileFaktury = 0;
let ileBony = 0;
let ileWolt = 0;
let ile_gotowka_500 = 0;
let ile_gotowka_200 = 0;
let ile_gotowka_100  = 0;
let ile_gotowka_50 = 0;
let ile_gotowka_20 = 0;
let ile_gotowka_10 = 0;
let ile_gotowka_5 = 0;
let ile_gotowka_2 = 0;
let ile_gotowka_1 = 0;
let ile_gotowka_0_50 = 0;
let ile_gotowka_0_20 = 0;
let ile_gotowka_0_10 = 0;
let naleznosc = 0;
let podsumowanie = 0;

let roznica = 0;

let tabela = [date,selectKasa,ileRano,ileKorekty,ileBony,ileWolt,ile_gotowka_500,ile_gotowka_200,ile_gotowka_100,ile_gotowka_50,ile_gotowka_20,ile_gotowka_10
    ,ile_gotowka_5,ile_gotowka_2, ile_gotowka_1, ile_gotowka_0_50, ile_gotowka_0_20, ile_gotowka_0_10,sumaCalkowitaGotowki,sumaDuza,
]

function onLoadBody(){
    dataObecna();
    kasaOptions();
    document.getElementById("datyLegia").style.display = "none";
    //zliczanieGotowkiDuzeBanknoty();
    // zliczanieGotowkiMaleBanknoty_Monety();
    //zliczanieInnychWartosci();
    // caloscGotowki();
}



function dataObecna() {
    date = new Date().toLocaleDateString("pl-PL",{
            day: "numeric",
            month: "numeric",
            year: "numeric"
    });

    //console.log(date);
    doTylu = 1;
    document.getElementById("data").innerHTML = date;
    return date;
}

function zmienDate(){
    document.getElementById("zmienDate").style.display = "none";
    document.getElementById("datyLegia").style.display = "initial";


}

function dzienDoPrzodu(){
    let today = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(today.getDate()+1);

    let jutro = new Date(tomorrow).toLocaleDateString("pl-PL",{
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
    date = jutro;
    document.getElementById("data").innerHTML = jutro;
}

function dzienDoTylu(){
    let today = new Date();
    let tomorrow = new Date();

    tomorrow.setDate(today.getDate()-doTylu);
    doTylu++;
    let wczoraj = new Date(tomorrow).toLocaleDateString("pl-PL",{
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
    date = wczoraj;
    document.getElementById("data").innerHTML = wczoraj;
}

function kasaOptions() {
    selectKasa = document.getElementById('kasa');

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.innerHTML = option.value = "KASA"+i;
        selectKasa.appendChild(option);
    }

    selectKasa.value = "KASA4";

}

function zliczanieInnychWartosci(){
    ileRano = document.getElementById("ileRano").value;
    ileKorekty = document.getElementById("ileKorekty").value;
    ileFaktury = document.getElementById("ileFaktury").value;
    ileWolt = document.getElementById("ileWolt").value;
    ileBony = document.getElementById("ileBony").value;

    document.getElementById("wynikRano").innerHTML = ileRano;
    document.getElementById("wynikKorekty").innerHTML = ileKorekty;
    document.getElementById("wynikFaktury").innerHTML = ileFaktury;
    document.getElementById("wynikWolt").innerHTML = ileWolt;
    document.getElementById("wynikBony").innerHTML = ileBony;
}

function zliczanieGotowkiDuzeBanknoty(){
    ileBony = parseFloat(document.getElementById("ileBony").value)|| 0;
    ileWolt = parseFloat(document.getElementById("ileWolt").value)|| 0;

    let male = +ileWolt + +ileBony;
    console.log(ileBony)
    console.log(ileWolt)
    console.log(male)

    ile_gotowka_500 = document.getElementById("ile_gotowka_500").value;
    ile_gotowka_200 = document.getElementById("ile_gotowka_200").value;
    ile_gotowka_100 = document.getElementById("ile_gotowka_100").value;
    ile_gotowka_50 = document.getElementById("ile_gotowka_50").value;

    document.getElementById("wynik_gotowka_500").innerHTML = ile_gotowka_500 * 500;
    document.getElementById("wynik_gotowka_200").innerHTML = ile_gotowka_200*200;
    document.getElementById("wynik_gotowka_100").innerHTML = ile_gotowka_100*100;
    document.getElementById("wynik_gotowka_50").innerHTML = ile_gotowka_50*50;



    sumaDuza =  (ile_gotowka_500 * 500) + (ile_gotowka_200*200) + (ile_gotowka_100*100)
        + (ile_gotowka_50*50) + male;

    document.getElementById("wartoscRazemDuzeBanknoty").innerHTML = sumaDuza + " zł";


    sumaCalkowitaGotowki = sumaMala+sumaDuza

    document.getElementById("razemCaloscGotowki").innerHTML = sumaCalkowitaGotowki + " zł";
}



function zliczanieGotowkiMaleBanknoty_Monety(){
    ile_gotowka_20 = document.getElementById("ile_gotowka_20").value;
    ile_gotowka_10 = document.getElementById("ile_gotowka_10").value;
    ile_gotowka_5 = document.getElementById("ile_gotowka_5").value;
    ile_gotowka_2 = document.getElementById("ile_gotowka_2").value;
    ile_gotowka_1 = document.getElementById("ile_gotowka_1").value;
    ile_gotowka_0_50 = document.getElementById("ile_gotowka_0_50").value;
    ile_gotowka_0_20 = document.getElementById("ile_gotowka_0_20").value;
    ile_gotowka_0_10 = document.getElementById("ile_gotowka_0_10").value;

    zero_50 = parseFloat(ile_gotowka_0_50*0.50);
    zero_20 = parseFloat(ile_gotowka_0_20*0.20);
    zero_10 = parseFloat(ile_gotowka_0_10*0.10);

    document.getElementById("wynik_gotowka_20").innerHTML = ile_gotowka_20*20;
    document.getElementById("wynik_gotowka_10").innerHTML = ile_gotowka_10*10;
    document.getElementById("wynik_gotowka_5").innerHTML = ile_gotowka_5*5;
    document.getElementById("wynik_gotowka_2").innerHTML = ile_gotowka_2*2;
    document.getElementById("wynik_gotowka_1").innerHTML = ile_gotowka_1*1;
    document.getElementById("wynik_gotowka_0_50").innerHTML = zero_50.toFixed(2);
    document.getElementById("wynik_gotowka_0_20").innerHTML = zero_20.toFixed(2);
    document.getElementById("wynik_gotowka_0_10").innerHTML = zero_10.toFixed(2);

    let sumaMaleMonety = + zero_50
        + zero_20
        + zero_10;

    console.log(sumaMaleMonety.toFixed(2));

    let sumaMalaWartosci = (ile_gotowka_20 * 20) + (ile_gotowka_10 * 10) + (ile_gotowka_5 * 5) + (ile_gotowka_2 * 2) +
        (ile_gotowka_1 * 1);

    sumaMala =  (parseFloat(sumaMaleMonety.toFixed(2)) + parseFloat(sumaMalaWartosci));

    // + zero_50.toFixed(2)
    // + zero_20.toFixed(2)
    // + zero_10.toFixed(2);

    document.getElementById("wartoscRazemMaleBanknotyMonety").innerHTML = sumaMala + " zł";

    sumaCalkowitaGotowki = sumaMala+sumaDuza

    document.getElementById("razemCaloscGotowki").innerHTML = sumaCalkowitaGotowki + " zł";

}

// function caloscGotowki(){
//     sumaCalkowitaGotowki = sumaMala+sumaDuza
//
//     document.getElementById("razemCaloscGotowki").innerHTML = sumaCalkowitaGotowki;
// }

function obliczanieRaportu(){

    naleznosc = parseFloat(document.getElementById("jakaNaleznosc").value) || 0;


    let rano = parseFloat(document.getElementById("ileRano").value) || 0;

    let faktury = parseFloat(document.getElementById("ileFaktury").value) || 0;

    let korekty = parseFloat(document.getElementById("ileKorekty").value) || 0;

    podsumowanie = parseFloat(document.getElementById("jakiePodsumowanie").value) || 0;

    obliczenie = naleznosc + rano + faktury - korekty - podsumowanie;

    console.log(naleznosc);
    console.log(rano);
    console.log(faktury);
    console.log(korekty);
    console.log(podsumowanie);

    document.getElementById("obliczonyRaport").innerHTML = obliczenie.toFixed(2) + " zł";

    wspolczynnikDnia();

}

function wspolczynnikDnia(){

    roznica = sumaCalkowitaGotowki - obliczenie;

    let plusLubMinus = document.getElementById("plusLubMinus");



    if (roznica>0){
        plusLubMinus.innerHTML = `+  ${roznica.toFixed(2)} zł`;
        plusLubMinus.style.color = "green";
    }else if (roznica<0){
        plusLubMinus.innerHTML = `${roznica.toFixed(2)} zł`;
        plusLubMinus.style.color = "#fa0606";
    }else {
        plusLubMinus.innerHTML = `${roznica.toFixed(2)} zł`;
    }


}


function podglad(){

// let array = ["dataValue", "kasaValue", "ranoValue", "korektyValue", "fakturyValue",
//       "woltValue", "bonyValue", "piecsetIle", "dwiescieIle", "stoIle", "piecdziesiatIle",
//       ,"dwadziesciaIle", "dziesiecIle", "piecIle", "dwaIle", "jedenIle",
//       "grosze50Ile", "grosze20Ile", "grosze10Ile",
//       ]
//
//     for (let i =0; i<id.length;i++){
//         localStorage.setItem(id[i], tabela[i])
//         console.log(id[i], tabela[i])
//     }
//
    selectKasa = document.getElementById('kasa').value;


    localStorage.setItem('dataValue', date)
    localStorage.setItem('kasaValue', selectKasa);
    localStorage.setItem('ranoValue', ileRano);
    localStorage.setItem('korektyValue', ileKorekty);
    localStorage.setItem('fakturyValue', ileFaktury);
    localStorage.setItem('woltValue', ileWolt);
    localStorage.setItem('bonyIle', ileBony);
    localStorage.setItem('piecsetIle', ile_gotowka_500);
    localStorage.setItem('dwiescieIle', ile_gotowka_200);
    localStorage.setItem('stoIle', ile_gotowka_100);
    localStorage.setItem('piecdziesiatIle', ile_gotowka_50);

    localStorage.setItem('dwadziesciaIle', ile_gotowka_20);
    localStorage.setItem('dziesiecIle', ile_gotowka_10);
    localStorage.setItem('piecIle', ile_gotowka_5);
    localStorage.setItem('dwaIle', ile_gotowka_2);
    localStorage.setItem('jedenIle', ile_gotowka_1);
    localStorage.setItem('grosze50Ile', ile_gotowka_0_50);
    localStorage.setItem('grosze20Ile', ile_gotowka_0_20);
    localStorage.setItem('grosze10Ile', ile_gotowka_0_10);

    if (roznica>0){
        localStorage.setItem('wspolczynnikValue', "+" +(roznica.toFixed(2) + " zł"));
    }
    else {
        localStorage.setItem('wspolczynnikValue', (roznica.toFixed(2) + " zł"));
    }

    localStorage.setItem('razemDuzeValue', sumaDuza.toFixed(0) + " zł");
    localStorage.setItem('razemMaleValue', sumaMala.toFixed(2)  + " zł");
    localStorage.setItem('razemCaloscValue', sumaCalkowitaGotowki.toFixed(2) + " zł");
    localStorage.setItem('raportValue', (obliczenie.toFixed(2) + " zł"));


    localStorage.setItem('bonyValue', ileBony);
    localStorage.setItem('piecsetValue', ile_gotowka_500*500);
    localStorage.setItem('dwiescieValue', ile_gotowka_200*200);
    localStorage.setItem('stoValue', ile_gotowka_100*100);
    localStorage.setItem('piecdziesiatValue', ile_gotowka_50*50);
    localStorage.setItem('dwadziesciaValue', ile_gotowka_20*20);
    localStorage.setItem('dziesiecValue', ile_gotowka_10*10);
    localStorage.setItem('piecValue', ile_gotowka_5*5);
    localStorage.setItem('dwaValue', ile_gotowka_2*2);
    localStorage.setItem('jedenValue', ile_gotowka_1*1);
    localStorage.setItem('grosze50Value', zero_50.toFixed(2));
    localStorage.setItem('grosze20Value', zero_20.toFixed(2));
    localStorage.setItem('grosze10Value', zero_10.toFixed(2));
}

function legia(){

    let element = ["wspolczynnikValue", "dataValue", "kasaValue", "ranoValue", "korektyValue", "fakturyValue",
        "woltValue", "bonyValue", "piecsetValue", "dwiescieValue", "stoValue", "piecdziesiatValue",
        "razemDuzeValue", "dwadziesciaValue", "dziesiecValue", "piecValue", "dwaValue", "jedenValue",
        "grosze50Value", "grosze20Value", "grosze10Value", "razemMaleValue", "razemCaloscValue", "raportValue"
    ]
    // for(let i=0;i<element.length;i++) {
    //    document.getElementById(element[i]).innerHTML = localStorage.getItem(element[i])
    document.getElementById('wspolczynnikValue').innerHTML = localStorage.getItem('wspolczynnikValue')
    document.getElementById('dataValue').innerHTML = localStorage.getItem('dataValue')
    document.getElementById('kasaValue').innerHTML = localStorage.getItem('kasaValue')
    document.getElementById('ranoValue').innerHTML = localStorage.getItem('ranoValue')
    document.getElementById('korektyValue').innerHTML = localStorage.getItem('korektyValue')
    document.getElementById('fakturyValue').innerHTML = localStorage.getItem('fakturyValue')
    document.getElementById('woltValue').innerHTML = localStorage.getItem('woltValue')
    document.getElementById('bonyValue').innerHTML = localStorage.getItem('bonyValue')
    document.getElementById('piecsetValue').innerHTML = localStorage.getItem('piecsetValue')
    document.getElementById('dwiescieValue').innerHTML = localStorage.getItem('dwiescieValue')
    document.getElementById('stoValue').innerHTML = localStorage.getItem('stoValue')
    document.getElementById('piecdziesiatValue').innerHTML = localStorage.getItem('piecdziesiatValue')
    document.getElementById('razemDuzeValue').innerHTML = localStorage.getItem('razemDuzeValue')
    document.getElementById('dwadziesciaValue').innerHTML = localStorage.getItem('dwadziesciaValue')
    document.getElementById('dziesiecValue').innerHTML = localStorage.getItem('dziesiecValue')
    document.getElementById('piecValue').innerHTML = localStorage.getItem('piecValue')
    document.getElementById('dwaValue').innerHTML = localStorage.getItem('dwaValue')
    document.getElementById('jedenValue').innerHTML = localStorage.getItem('jedenValue')
    document.getElementById('grosze50Value').innerHTML = localStorage.getItem('grosze50Value')
    document.getElementById('grosze20Value').innerHTML = localStorage.getItem('grosze20Value')
    document.getElementById('grosze10Value').innerHTML = localStorage.getItem('grosze10Value')
    document.getElementById('razemMaleValue').innerHTML = localStorage.getItem('razemMaleValue')
    document.getElementById('razemCaloscValue').innerHTML = localStorage.getItem('razemCaloscValue')
    document.getElementById('raportValue').innerHTML = localStorage.getItem('raportValue')
    // }
//document.getElementById('bonyIle').innerHTML = localStorage.getItem('bonyIle')

    let array = ["piecsetIle", "dwiescieIle", "stoIle", "piecdziesiatIle",
        ,"dwadziesciaIle", "dziesiecIle", "piecIle", "dwaIle", "jedenIle",
        "grosze50Ile", "grosze20Ile", "grosze10Ile",
    ]

    // for(let i=0;i<array.length;i++) {
    // document.getElementById(array[i]).innerHTML = localStorage.getItem(array[i])
    document.getElementById('piecsetIle').innerHTML = localStorage.getItem('piecsetIle')
    document.getElementById('dwiescieIle').innerHTML = localStorage.getItem('dwiescieIle')
    document.getElementById('stoIle').innerHTML = localStorage.getItem('stoIle')
    document.getElementById('piecdziesiatIle').innerHTML = localStorage.getItem('piecdziesiatIle')
    document.getElementById('dwadziesciaIle').innerHTML = localStorage.getItem('dwadziesciaIle')
    document.getElementById('dziesiecIle').innerHTML = localStorage.getItem('dziesiecIle')
    document.getElementById('piecIle').innerHTML = localStorage.getItem('piecIle')
    document.getElementById('dwaIle').innerHTML = localStorage.getItem('dwaIle')
    document.getElementById('jedenIle').innerHTML = localStorage.getItem('jedenIle')
    document.getElementById('grosze50Ile').innerHTML = localStorage.getItem('grosze50Ile')
    document.getElementById('grosze20Ile').innerHTML = localStorage.getItem('grosze20Ile')
    document.getElementById('grosze10Ile').innerHTML = localStorage.getItem('grosze10Ile')
    //  }

}
function lol(){
    window.print();

    let wiadomosci = [
        "Czas odpocząć! Zrobiłeś świetną pracę dziś, teraz zasługujesz na zasłużony odpoczynek w domu!",
        "Brawo! Twój wysiłek dzisiaj był niesamowity. Teraz możesz cieszyć się zasłużonym spokojem w domu.",
        "Zamknij komputer i złap oddech! Dziś byłeś niesamowity, teraz czas na relaks w domowym zaciszu.",
        "W końcu koniec dnia! Świetnie pracowałeś, teraz relaks w domu czeka na Ciebie.",
        "Zadania zrobione! Zasłużyłeś na spokojny wieczór w domu. Odpocznij i naładuj baterie!",
        "Kolejny udany dzień pracy za Tobą! Teraz czas na zasłużony odpoczynek w domowym zaciszu.",
        "Dziękuję za Twoje zaangażowanie! Zamykamy sklep, a Ty możesz spędzić resztę dnia w domowym cieple.",
        "Odpoczynek czeka! Dzisiaj był naprawdę produktywny dzień, teraz zrelaksuj się w domu.",
        "Dobra robota! Czas na zasłużony relaks w domu. Odpocznij i przygotuj się na kolejny udany dzień jutro.",
        "Zamykamy drzwi sklepu, a Ty możesz spokojnie wrócić do domu i odpocząć po udanym dniu pracy.",
        "Twój trud się opłacił! Zakończ pracę z uśmiechem, teraz czeka Cię zasłużony odpoczynek w domu.",
        "Zadania wykonane! Teraz możesz wrócić do domu i cieszyć się spokojem wieczoru.",
        "Koniec pracy na dziś! Zasłużyłeś na relaks w domu po pełnym wyzwaniach dniu. Odpocznij dobrze!",
        "W końcu do domu!"
    ];

    let losowyIndex = Math.floor(Math.random() * wiadomosci.length);

    window.onafterprint = (event) => {
        alert(wiadomosci[losowyIndex]);
    };

}
// let myVariable = 'Hello from myModule!';
//
//
//
// module.exports = {
//   myVariable: myVariable,
// };




