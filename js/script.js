
//INICIO DA FUNÇÃO

function start() {
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    $("#fundoGame").append("<div id='inimigo1'class='anima2'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

    //Principais variáveis

    var jogo = {}

    //Game loop

    jogo.timer = setInterval(loop,30);
    function loop(){
        movefundo();
    }                      
    
    //Fim do loop

    //Função de movimento do jogo

    function movefundo(){
        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css ("background-position", esquerda-1);
    }
    //Fim da  função movefundo
}
//FIM DA FUNÇÃO START

