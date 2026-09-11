const perguntas = [
    {
        pergunta: "Quando você precisa resolver um problema, o que costuma fazer?",
        alternativas: [
            { texto: "Procuro uma solução criativa", pontos: 3 },
            { texto: "Pesquiso informações primeiro", pontos: 2 },
            { texto: "Peço ajuda para alguém", pontos: 1 },
            { texto: "Tento várias possibilidades", pontos: 3 }
        ]
    },

    {
        pergunta: "Qual área da tecnologia mais chama sua atenção?",
        alternativas: [
            { texto: "Inteligência Artificial", pontos: 3 },
            { texto: "Programação", pontos: 3 },
            { texto: "Redes sociais", pontos: 2 },
            { texto: "Design e criação", pontos: 3 }
        ]
    },

    {
        pergunta: "Como você usaria a inteligência artificial?",
        alternativas: [
            { texto: "Para aprender coisas novas", pontos: 3 },
            { texto: "Para criar projetos", pontos: 3 },
            { texto: "Para facilitar tarefas", pontos: 2 },
            { texto: "Ainda estou descobrindo", pontos: 1 }
        ]
    },

    {
        pergunta: "O que é mais importante ao usar tecnologia?",
        alternativas: [
            { texto: "Usar com responsabilidade", pontos: 3 },
            { texto: "Criar coisas novas", pontos: 3 },
            { texto: "Ajudar outras pessoas", pontos: 3 },
            { texto: "Ter acesso à informação", pontos: 2 }
        ]
    },

    {
        pergunta: "Se pudesse criar uma tecnologia, o que faria?",
        alternativas: [
            { texto: "Uma IA para ajudar nos estudos", pontos: 3 },
            { texto: "Um aplicativo útil", pontos: 3 },
            { texto: "Uma ferramenta para ajudar a comunidade", pontos: 3 },
            { texto: "Um jogo divertido", pontos: 2 }
        ]
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciar() {
    document.getElementById("inicio").classList.add("escondido");
    document.getElementById("quiz").classList.remove("escondido");

    mostrarPergunta();
}

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numero").textContent =
        "Pergunta " + (perguntaAtual + 1);

    document.getElementById("progresso").textContent =
        (perguntaAtual + 1) + "/" + perguntas.length;

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const area = document.getElementById("alternativas");

    area.innerHTML = "";

    pergunta.alternativas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.textContent = alternativa.texto;

        botao.onclick = function() {
            responder(alternativa.pontos);
        };

        area.appendChild(botao);
    });
}

function responder(pontos) {

    pontuacao += pontos;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("quiz").classList.add("escondido");
    document.getElementById("resultado").classList.remove("escondido");

    let perfil =
