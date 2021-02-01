import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function BotaoRota(props) {
    return (

        <div className="conteudo-opcoes">
            <Link className="opcao-front-end" to='/front-end'>{props.rota1}</Link>
            <Link className="opcao-back-end" to='/back-end'>{props.rota2}</Link>
        </div>

    );
}
