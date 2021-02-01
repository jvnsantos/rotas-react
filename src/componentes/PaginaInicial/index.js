import React from 'react';
import './style.css'
import BotaoRota from '../BotaoRota';



function PaginaInicial (){
  return(

    <div>
    <h1>Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">

      <BotaoRota classe="opcao-front-end" endereco="/front-end" nome="Front-End" />
      <BotaoRota classe="opcao-back-end" endereco="/back-end" nome="Back-End" />
      

    </div>

    
  </div>
  );
  } export default PaginaInicial;