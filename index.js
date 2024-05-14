// AQUI EU VOU PEGAR TODOS OS MEUS ELEMENTOS PELO ID

const valor = document.getElementById('valor');
const maisButton = document.getElementById('mais');
const menosButton = document.getElementById('menos');
const resetarButton = document.getElementById('resetar');


// AQUI EU CRIEI UMA FUNÇÃO QUE ATUALIZA O VALOR EXIBIDO NA TELA

const updateValue = () => {
    valor.innerHTML = contador;
};


// AQUI EU CRIEI MINHAS VARIAVEIS CONTADOR QUE RECEBE 0 E DEPOIS MUDA NA TELA

let contador = 0;
let intervalId = 0;
 // AQUI VAI ADICIONAR UM VALOR 
 
maisButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador += 1;
        updateValue();
    }, 100);
});


// AQUI VAI DIMINUIR O VALOR

menosButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador -= 1;
        updateValue();
    }, 100);
});

// AQUI É MINHA FUNÇÃO QUE RESETA O MEU CONTADOR

resetarButton.addEventListener('click', () => {
    contador = 0;
    updateValue();   
});
 // AQUI ENTENDE QUE O USUARIO SOLTOU O MOUSE 
 
document.addEventListener('mouseup', () => clearInterval(intervalId));
