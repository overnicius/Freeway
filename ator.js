let xAtor = 80;
let yAtor = 366;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor (){
   image (imagemDoAtor, xAtor, yAtor, 30, alturaAtor);
}

function movimentaAtor (){
  if (keyIsDown (UP_ARROW) && (yAtor > 0 )){
    yAtor -= 3;
  }
   if (keyIsDown (RIGHT_ARROW) && (xAtor += 1)){
    xAtor += 3
  }
  if (keyIsDown (LEFT_ARROW) && (xAtor += 1)){
    xAtor -= 3
  }
  if (keyIsDown (DOWN_ARROW) && (yAtor + alturaAtor)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      voltaPosicaoInicial();
      if (pontosMaiorQueZero ()){
        meusPontos -= 1;
        somColidiu.play();
      }
    }
  }
}

function voltaPosicaoInicial (){
  yAtor = 366;
}

function incluiPontos(){
  textAlign (CENTER);
  textSize (25);
  fill(color(255, 240,40));
  text (meusPontos, width / 5, 25);
}

function marcaPonto (){
  if (yAtor < 20){
    meusPontos +=1
    voltaPosicaoInicial();
    somPontos.play();
  }
}

function pontosMaiorQueZero (){
  return meusPontos > 0;
}

function podeSeMover (){
  return yAtor < 366;
}

function limiteDaTela (){
  if (xAtor <= 0){
    xAtor = 0
  }
  if (xAtor >= 470){
    xAtor = 470
  }
}