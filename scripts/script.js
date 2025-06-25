// Função para carregar monitorias do localStorage
function carregarMonitorias() {
    const monitorias = JSON.parse(localStorage.getItem('monitorias')) || [];
    return monitorias;
}

// Função para salvar monitorias no localStorage
function salvarMonitorias(monitorias) {
    localStorage.setItem('monitorias', JSON.stringify(monitorias));
}

// Atualiza a lista de monitorias na page2.html
function atualizarListaMonitorias() {
    const monitorias = carregarMonitorias();
    const listaMonitorias = document.getElementById('lista-monitorias');

    if (listaMonitorias) {
        listaMonitorias.innerHTML = '';
        monitorias.forEach((monitoria, index) => {
            const li = document.createElement('li');
            li.textContent = `${monitoria.disciplina} - ${monitoria.monitor} (${monitoria.data} às ${monitoria.horarioInicio})`;
            listaMonitorias.appendChild(li);
        });
    }
}

// Adiciona uma nova monitoria na page3.html
function adicionarMonitoria(event) {
    event.preventDefault();

    const disciplina = document.getElementById('disciplina').value;
    const monitor = document.getElementById('monitor').value;
    const data = document.getElementById('data').value;
    const horarioInicio = document.getElementById('horarioInicio').value;

    const monitorias = carregarMonitorias();
    monitorias.push({ disciplina, monitor, data, horarioInicio });
    salvarMonitorias(monitorias);

    alert('Monitoria adicionada com sucesso!');
    window.location.href = 'page2.html'; // Redireciona para page2.html
}

// Event listener para page3.html
const formMonitoria = document.getElementById('form-monitoria');
if (formMonitoria) {
    formMonitoria.addEventListener('submit', adicionarMonitoria);
}

// Inicialização para page2.html
if (document.getElementById('lista-monitorias')) {
    atualizarListaMonitorias();
}



