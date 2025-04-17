function verificarSenha() {
    const senha = document.getElementById('senha').value;
    if (senha === 'sigilo') {
        document.getElementById('senha-container').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('senha-container').style.display = 'none';
            document.querySelector('.carta').classList.add('show-carta');
        }, 500);
    } else {
        alert('Ops, esse não é nosso segredo! Tente de novo ♥️');
    }
}
 
const icons = ['♥️', '✨', '♥️', '💎'];
for (let i = 0; i < 6; i++) {
    let element = document.createElement('div');
    element.classList.add('floating-heart');
    element.innerText = icons[Math.floor(Math.random() * icons.length)];
    element.style.top = `${Math.random() * 100}%`;
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDelay = `${Math.random() * 3}s`;
    element.style.animationDuration = `${4 + Math.random() * 3}s`;
    document.body.appendChild(element);
}