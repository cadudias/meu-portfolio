const logos = document.querySelectorAll('.devicon');
const informacoes = document.querySelectorAll('.informacoes');

logos.forEach(logo => {
    logo.addEventListener('click', event => {
        if(event.target.id === '') return;

        const textoHabilidade = document.querySelector('.' + event.target.id);
        textoHabilidade.classList.add('mostrar');

        document.querySelector('.default').classList.remove('mostrar');
    });

    logo.addEventListener('mouseout', () => mostrarTextoPadrao());
});

function mostrarTextoPadrao() {
    informacoes.forEach(logo => logo.classList.remove('mostrar'));
    document.querySelector('.default').classList.add('mostrar');
}
