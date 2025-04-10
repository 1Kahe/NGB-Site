function mostrarDetalhes(selectElement) {
    const descricaoCell = selectElement.parentElement.nextElementSibling; // 
    const descricaoText = {
        comunicacao: `<ol>
                <li>Peça ao cliente para descrever o problema detalhadamente.</li>
                <li>Verifique mensagens de erro ou comportamentos incomuns.</li>
                <li>Teste soluções básicas como reiniciar ou limpar cache.</li>
                <li>Consulte documentação interna da empresa.</li>
                <li>Mantenha comunicação clara e objetiva com o cliente.</li>
             </ol>`,
        organizacao: `<ol>
                <li>Identifique os pontos que estão desorganizados e causando impacto.</li>
                <li>Classifique as tarefas por prioridade para evitar acúmulo de problemas.</li>
                <li>Utilize ferramentas como checklists e softwares de gestão para estruturar o trabalho.</li>
                <li>Crie um fluxo de trabalho claro e bem definido.</li>
                <li>Faça reuniões periódicas para revisar e ajustar o planejamento.</li>
             </ol>`,
        conflito: `<ol>
                <li>Escute ambas as partes envolvidas para entender o problema.</li>
                <li>Identifique a raiz do conflito e analise possíveis soluções.</li>
                <li>Atue como mediador e promova um diálogo respeitoso entre os envolvidos.</li>
                <li>Busque um consenso que seja justo para todos.</li>
                <li>Registre a solução e acompanhe para evitar recorrências.</li>
             </ol>`
    };

    const problemaSelecionado = selectElement.value;

  
    descricaoCell.innerHTML = problemaSelecionado ? descricaoText[problemaSelecionado] : '';
}