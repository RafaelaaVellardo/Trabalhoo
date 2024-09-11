function mostrarInformacoes() {
    const infoElement = document.getElementById('info');
    const dados = localStorage.getItem('login');
    
    if (dados) {
        const obj = JSON.parse(dados);
        infoElement.textContent = `Nome: ${obj.name}, Senha: ${obj.password}`;
    } else {
        alert('não há dados')
    }
}

mostrarInformacoes();