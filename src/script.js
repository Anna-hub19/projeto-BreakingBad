const bt = document.querySelectorAll('.botao');
const img = document.querySelectorAll('.imagem');

bt.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarSelecionado();
        ativarBt(botao);
        esconderImgAtiva();
        img[indice].classList.add('ativa');
    });
})
function ativarBt(botao){
    botao.classList.add('selecionado');
}
function esconderImgAtiva(){
    const imgAtiva = document.querySelector('.ativa');
    imgAtiva.classList.remove('ativa');
}
function desativarSelecionado(){
    const selecionadoBt = document.querySelector('.selecionado');
    selecionadoBt.classList.remove('selecionado');
}