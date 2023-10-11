document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Queridos professores, hoje é o dia de celebrar vocês, " +
        "Ser professor é ser um condutor de almas e sonhos é lapidar mentes para que alcamcem o seu melhor . " +
        "Em cada sala de aula, vocês desempenham um papel vital na formação do futuro. " +
        "Aprender a ensinar para viver para educar . " +
        "Vocês não apenas compartilham conhecimento, mas também cultivam valores, orientam e apoiam os sonhos de seus alunos. " +
        "Com paciência infinita, vocês transformam desafios em oportunidades de aprendizado e capacitam os jovens a serem cidadãos responsáveis e pensadores críticos. " +
        "Neste Dia dos Professores, quero expressar minha mais profunda gratidão por tudo o que vocês fazem. " +
        "Vocês são faróis de luz na jornada educacional de todos nós, iluminando o caminho com sabedoria e compreensão. " +
        "Que sua jornada seja repleta de coisas boas e realizações  . " +
        "Feliz Dia dos Professores!";
    });
});

