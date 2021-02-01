import React from "react";
import { Link } from "react-router-dom";


export default function BotaoRota(props) {
    return (

        
            <Link className={props.classe} to={props.endereco}> {props.nome}</Link>

           
        

    );
}
