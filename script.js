
document.addEventListener('DOMContentLoaded', () => {
    console.log('O documento está pronto!');

    const imagens = document.querySelectorAll('img');

    imagens.forEach((imagem) => {
        imagem.addEventListener('click', () => {
            alert(`Você clicou na imagem: ${imagem.src}`);
        });
    });


    const titulo = document.querySelector('h1');
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'blue';
    });

""
    titulo.addEventListener('mouseout', () => {
        titulo.style.color = '#333';
    });
});
