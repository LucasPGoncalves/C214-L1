function calculaIMC(peso, altura){
    if (altura === 0){
        return 'NaN'
    }

    const alturaMetros = altura/100;
    return (peso/(alturaMetros * alturaMetros)).toFixed(2);
}

function classificaIMC(imc){
    if(imc > 0 && imc < 18.5){
        return "Abaixo do peso";
    }
    else if(imc >= 18.5 && imc < 24.9){
        return "Peso ideal";
    }
    else if(imc >= 25 && imc < 29.9){
        return "Levemente acima do peso";
    }
    else if (imc >= 30 && imc < 34.9){
        return "Obesidade grau I";
    }
    else if (imc >= 35 && imc < 39.9){
        return "Obesidade grau II";
    }
    else if(imc >= 40){
        return "Obesidade grau III";
    }
    else{
        return "IMC invalido"
    } 
}

function atualizaHistorico(historicoIMC, imc){
    if(imc !== 'NaN'){
        historicoIMC.push(imc)
    }
}

module.exports = { calculaIMC, classificaIMC, atualizaHistorico };