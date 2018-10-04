// buscando todos os alunos
const todosOsAlunos = document.querySelectorAll(".aluno");
// console.log(todosOsAlunos);
// const ana = "ana";
// const net = "nat";
// const den = "den";

// const todasAsAlunas = ["ana, "nat", "den"];
// console.log(toddasAsAlunas);

// imprimindo cada aluno da lista
for (let i = 0; i < todosOsAlunos.length; i++) {
     console.log(todosOsAlunos[i]);

     const aluno = todosOsAlunos[i];
     
     
     // buscar o valor da primeira nota
     const tdPrimeiraNota = aluno.querySelector(".info-notaum");
     let primeiraNota = tdPrimeiraNota.textContent;
     
     // buscar o valor da segunda nota
     const tdSegundaNota = aluno.querySelector(".info-notadois");
     let segundaNota = tdSegundaNota.textContent;
     //console.log(primeiraNota);
     //console.log(segundaNota);
     
     // campo da média
     const mediaFinal = aluno.querySelector(".info-media");
     const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
     
     mediaFinal.textContent = mediaCalculada.toFixed(2); // quantidade de casas
}
     
/*
    let notaEhValida = true;

    if (primeiraNota < 0 || primeiraNota > 10) {
        notaEhValida = false;
        mediaFinal.textContent = "Nota Inválida.";
    }

    if (notaEhValida) {
        // calculando a média e apresentando o resultado
        let mediaCalculada = calculaMedia(primeiraNota, segundaNota);

        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-media");
        }

        mediaFinal.textContent = mediaCalculada.toFixed(2);
    }
}

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    let mediaCalculadaNaFuncao = 0;
    mediaCalculadaNaFuncao = (parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2;
    return mediaCalculadaNaFuncao;
}*/
