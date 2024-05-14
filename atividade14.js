function calcNums() {
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    if (numA > numB) {
        let resD = (numA + " e " + numB);
        document.getElementById('D').innerHTML = (resD);
    } else {
        let resD = (numB + " e " + numA);
        document.getElementById('D').innerHTML = (resD);
    };

    document.getElementById('A').innerHTML = (Math.abs(numA - numB));
    document.getElementById('B').innerHTML = ((2 * numA) + (3 * numB));
    document.getElementById('C').innerHTML = (numA * numB);
}

function calcsalario() {
    let nome = parseFloat(document.getElementById("nome").value);
    let bruto = parseFloat(document.getElementById("bruto").value);
    let porcento = 0.09;
    if (bruto < 1000) {
        porcento = 0.08;
    } else {
        if (bruto < 1500) {
            porcento = 0.085;
        };
    };
    
    document.getElementById('p_nome').innerHTML = (nome);
    document.getElementById('p_bruto').innerHTML = ("R$" + bruto);
    document.getElementById('p_porcentagem').innerHTML = (porcento * 100 + "%");
    document.getElementById('p_inss').innerHTML = ("R$" + (bruto * porcento));
    document.getElementById('p_liquido').innerHTML = ("R$" + (bruto - (bruto * porcento)));
}

/*Isso é só um easter egg que muda a cor do fundo */

function easterEgg(){
    corset(Math.round(Math.random() * 100),Math.round(Math.random() * 100),Math.round(Math.random() * 100));
    document.getElementById("body").style.backgroundColor = cor;
    console.log(cor);
}

function corset(r,g,b) {
    cor = ("rgb(" + r + ", " + g + ", " + b + ")")
}