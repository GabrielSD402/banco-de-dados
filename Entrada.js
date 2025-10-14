document.getElementById('salvarBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const OM = document.getElementById('OM').value;
    const IDT = document.getElementById('IDT').value;
    const telefone = document.getElementById('telefone').value;
    const responsavel = document.getElementById('responsavel').value;
    const data = document.getElementById('data').value;
    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSaida = document.getElementById('horaSaida').value;
    const destino = document.getElementById('destino').value;
    const observacao = document.getElementById('observacao').value;

    const conteudo = 
`Nome: ${nome}
OM: ${OM}
IDT/CPF: ${IDT}
Telefone: ${telefone}
Responsável: ${responsavel}
Data: ${data}
Horário Entrada: ${horaEntrada}
Horário Saída: ${horaSaida}
Destino: ${destino}
Observação: ${observacao}`;

    const blob = new Blob([conteudo], {type: "text/plain;charset=utf-8"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `controle_${nome.replace(/\s+/g,'_')}.txt`;
    link.click();
});