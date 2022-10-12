
function succo (mele, arance){
    const succoFrutta = `succo con ${mele} mele e ${arance} arance`;
    return succoFrutta;
}
document.getElementById('corretta').innerHTML = succo(4,5);
document.getElementById('sbagliata').innerHTML = succo(6);

function calcolaEta(annoNascita){
    return 2022 - annoNascita;   
}
document.getElementById('eta').innerHTML += `${calcolaEta(1967)} anni`;

eta1 = (eta2, tipa) =>{
    const personeNascita = `L'anno di nascita di ${tipa} è ${(2022-eta2)}`;
    return personeNascita;
}
document.getElementById('persona1').innerHTML = eta1(30, 'Anna');
document.getElementById('persona2').innerHTML = eta1(24, 'Maria');

function tagliaFette(torta) {
	return torta * 3;
}
function scegliTorta(mela, arancia) {
	const fetteMela = tagliaFette(mela);
	const fetteArancia = tagliaFette(arancia);
	const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
	return torta;
}
document.getElementById('torta').innerHTML = scegliTorta(3, 5);

var btn = document.getElementById('calcola');

btn.addEventListener ('click', function() {
    let cibo = Number (document.getElementById('cibo').valueAsNumber);
    let detersivi = Number (document.getElementById('detersivi').valueAsNumber);
    let abiti = Number (document.getElementById('abiti').valueAsNumber);
    let somma = cibo + detersivi + abiti;
    document.getElementById('totale').innerHTML = somma;
})

