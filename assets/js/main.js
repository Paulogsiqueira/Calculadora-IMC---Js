const form = document.querySelector('#form')
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Invalido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivel = getNivelImc(imc);
    setResultado(`Seu IMC é ${imc} (${nivel})`,true);
})

function getNivelImc(imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso','Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if (imc<=18.5) return nivel[0];
    if ( imc <=24.9) return nivel[1]
    if ( imc <= 29.9) return nivel[2]
    if ( imc <=34.9) return nivel[3]
    if( imc < 39.9) return nivel[4]
    if (imc >=39.9) return nivel[5]
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = criarP();

    if(isValid){
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criarP(){
    const p = document.createElement('p');
    return p;
}

function getImc(peso,altura){
    let imc = peso/(altura*altura);
    return imc.toFixed(2);
}