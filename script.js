let peso = document.getElementById('peso');
let alt;
let imc;
let resultado;
let visu;
let img;

document.getElementById('altura').addEventListener('input', function() {
    let valor = this.value;
    if (valor.length === 1 && !valor.includes('.')) {
        this.value = valor + '.';
    }
});

function calc(event){
    event.preventDefault();
   
    alt = parseFloat(document.getElementById('altura').value);
    peso = parseFloat(document.getElementById('peso').value);


    if (isNaN(alt) || isNaN(peso)) {
        alert("Por favor, insira altura e peso válidos.");
        return;
    }
    imc = peso / (alt * alt);
    resultado = imc.toFixed(2);
    visu = document.getElementById('visu');
    console.log(resultado);
    
     if(resultado <= 18.5){
        visu.innerHTML='<h2> Abaixo do Peso </h2><br>';
        img = document.createElement('img');
        img.src = 'baixopeso.png';
        img.width = 40;
        visu.appendChild(img);
    }else if(resultado <= 24.99){
        visu.innerHTML='<h2>Peso Ideal</h2><br>';
        img = document.createElement('img');
        img.src = 'pesoideal.png';
        img.width = 48;
        visu.appendChild(img);
    }else if(resultado <= 29.99){
        visu.innerHTML='<h2>Sobrepeso</h2><br>';
        img = document.createElement('img');
        img.src = 'sobrepeso.png';
        img.width = 58;
        visu.appendChild(img);
    }else{
        visu.innerHTML='<h2>Obesidade</h2><br>';
        img = document.createElement('img');
        img.src= 'obesidade.png';
        img.width = 60;
        visu.appendChild(img);
    }
}