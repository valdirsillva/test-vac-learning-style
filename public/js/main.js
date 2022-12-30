const caracteristicas = [
    {
        "visual": {
            "estiloaprendizagem": "Aprende pela visão; observa demonstrações; gosta de ler e imaginar as cenas no livro; tem boa concentração; rápido na compreensão.",
            "memoria": "Lembra-se bem dos rostos, mas se esquece dos nomes; escreve e anota através de esquemas resumidos e simbólicos; lembra bem das imagens.",
            "resolve_problemas": "Delibera e planeja bem antes; organiza os pensamentos e tem boa visão das soluções e alternativas.",
            "aparencia_geral": "Limpo; meticuloso; gosta de ordem e de coisas bonitas.",
            "comunicacao": "Quieto; não fala muito e se o faz fala muito rápido; impacienta-se quando tem que ouvir explanações longas; uso desajeitado das palavras; descreve coisas com detalhes; usa predicados verbais do tipo “veja bem..., é claro..., brilhante” etc."
        },
        "auditivo": {
            "estiloaprendizagem": "Aprende por instruções verbais; gosta de diálogos; evita descrições longas; não presta atenção nas ilustrações; move os lábios quando lê; subvaloriza.",
            "memoria": "Lembra os nomes, mas esquece os rostos; decora as coisas por repetição auditiva",
            "resolve_problemas": "Fala sobre os problemas; testa as soluções verbalmente",
            "aparencia_geral": "Combinar roupas não é tão importante; prefere explicar as escolhas.",
            "comunicacao": "Gosta de ouvir mas não consegue esperar para falar; descrições são longas e repetitivas; usa predicados verbais do tipo: “ouça, escute, deixe eu explicar...”."
        },
        "cinestesico": {
            "estiloaprendizagem": "Aprende fazendo, por envolvimento direto; prefere ir logo para a ação; não é bom leitor",
            "memoria": "Lembra-se melhor das coisas que fez e não daquelas que ouviu.",
            "resolve_problemas": "Ataca fisicamente o problema; ação; impulsividade; geralmente escolhe soluções que envolvem muitas atividades.",
            "aparencia_geral": "Limpo; mas logo se desarruma por causa das atividades. Sem muito senso estético, conforto é essencial.",
            "comunicacao": "Gesticula quando fala; não é bom ouvinte; fica muito perto quando fala ou ouve; perde rapidamente interesse por discursos; usa predicados do tipo: “sinto que, pegue firme, concreto,..”etc."
        }
    }
];

window.addEventListener("load", () => {
    var VISUAL = 0
    var AUDITIVO = 0
    var CINESTESICO = 0
    var scrollTop = 0;

    let inputs = document.querySelectorAll('input[type="radio"]');
    let button = document.querySelector('.button-link');

    let display = document.querySelector('.percents-items');
    let gridBox = document.querySelector('.grid-item-box');

    let next = document.querySelector('.next');
    let previous = document.querySelector('.previous');


    document.querySelector('#visual').addEventListener("click", (e) => {
        visual(e);
    })

    document.querySelector('#auditivo').addEventListener("click", (e) => {
        auditory(e);
    })

    document.querySelector('#cinestesico').addEventListener("click", (e) => {
        kinesthetic(e);
    })


    inputs.forEach(function (element) {
        element.addEventListener("click", (item) => {

            let elementSelected = item.target.value;

            if (elementSelected == 'a') {
                VISUAL++;
            }

            if (elementSelected == 'b') {
                AUDITIVO++;
            }

            if (elementSelected == 'c') {
                CINESTESICO++;
            }
        })
    })

    button.addEventListener("click", (e) => {

        let totalVisual = (VISUAL * 100) / 20;
        let totalAuditivo = (AUDITIVO * 100) / 20;
        let totalCinestesico = (CINESTESICO * 100) / 20;

        const data = {
            visual: totalVisual,
            auditivo: totalAuditivo,
            cinestesico: totalCinestesico
        }

        if (data.visual === 0 || data.auditivo === 0 || data.cinestesico === 0) {
            throw new Error('Ã‰ necessÃ¡rio preencher as perguntas.');
        }

        if (totalVisual > totalAuditivo) {
            visual(e);
        } else if (totalAuditivo > totalVisual && totalAuditivo > totalCinestesico) {
            auditory(e);
        } else {
            kinesthetic(e);
        }

        display.classList.toggle('active');
        gridBox.classList.toggle('active');

        document.querySelector('#visualtext').textContent = `${data.visual}%`;
        document.querySelector('#auditivotext').textContent = `${data.auditivo}%`;
        document.querySelector('#cinestesicotext').textContent = `${data.cinestesico}%`;

        movieScrollToBottom()
    })

    next.addEventListener("click", () => {
        stepPrevious();
    })

    previous.addEventListener("click", () => {
        stepNext();
    })

    function visual(e) {
        caracteristicas.map(item => {
            const { estiloaprendizagem, memoria, resolve_problemas, aparencia_geral, comunicacao } = item.visual;

            document.querySelector('.type').textContent = e.target.textContent

            document.querySelector('#memoria').textContent = memoria
            document.querySelector('#comunicacao').textContent = comunicacao
            document.querySelector('#aparencia_geral').textContent = aparencia_geral
            document.querySelector('#resolve_problemas').textContent = resolve_problemas
            document.querySelector('#estilo_aprendizagem').textContent = estiloaprendizagem
        })
    }

    function auditory(e) {
        caracteristicas.map(item => {
            const { estiloaprendizagem, memoria, resolve_problemas, aparencia_geral, comunicacao } = item.auditivo;

            document.querySelector('.type').textContent = e.target.textContent

            document.querySelector('#memoria').textContent = memoria
            document.querySelector('#comunicacao').textContent = comunicacao
            document.querySelector('#aparencia_geral').textContent = aparencia_geral
            document.querySelector('#resolve_problemas').textContent = resolve_problemas
            document.querySelector('#estilo_aprendizagem').textContent = estiloaprendizagem
        })
    }

    function kinesthetic(e) {
        caracteristicas.map(item => {
            const { estiloaprendizagem, memoria, resolve_problemas, aparencia_geral, comunicacao } = item.cinestesico;

            document.querySelector('.type').textContent = e.target.textContent

            document.querySelector('#memoria').textContent = memoria
            document.querySelector('#comunicacao').textContent = comunicacao
            document.querySelector('#aparencia_geral').textContent = aparencia_geral
            document.querySelector('#resolve_problemas').textContent = resolve_problemas
            document.querySelector('#estilo_aprendizagem').textContent = estiloaprendizagem
        })
    }

    function movieScrollToBottom() {
        window.scrollTo({
            top: 650,
            left: 0,
            behavior: 'smooth'
        });
    }

    let stepNext = () => {
        scrollTop = scrollTop + 315;
        document.querySelector('.wrapper-questions').scrollTop = scrollTop;
    }

    let stepPrevious = () => {
        scrollTop = scrollTop - 315;
        document.querySelector('.wrapper-questions').scrollTop = scrollTop;
    }
})