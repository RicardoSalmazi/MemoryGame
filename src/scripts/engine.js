// tecla windows + . você tem acesso aos emojis do windows!!!!
// ctrl + alt + shift seleciono várias linhas

const emojis = [
    "🐵",
    "🐵",
    "🐷",
    "🐷",
    "🐮",
    "🐮",
    "🐶",
    "🐶",
    "🦓",
    "🦓",
    "🐔",
    "🐔",
    "🐻",
    "🐻",
    "🫎",
    "🫎"
]; // Lição aprendida: há um erro no emoji do gatimho que
   // eu excolhi. Fiquei 1 hora nisso. Mas o instinto me 
   // fez trocar a pôrra do gatinho pelo macaquinho. Ai deu certo! 
   

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Usarei estrutura for para desenhar os elementos na tela:
for(let i=0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className="item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick; /* Essa função não existe, então
    será criada logo abaixo, fora do laço "for". */
    document.querySelector(".game").appendChild(box);
} // Cara, isto// eu excolhi. Fiquei 1 hora nisso. Mas o instinto me  tem que ser super estudado!!!

function handleClick() {
    /*alert("Alô!");  só pra testar a chamada desta função. */
    this.classList.add("boxOpen");
    
    
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    } 
/* Essa função checkMath também não existe, por isso a crio abaixo */
    if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    /*Após as verificações, tenho que zerar a lista de cards abertos */
    openCards =[];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
} 