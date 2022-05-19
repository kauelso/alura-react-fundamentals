import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss"
import { v4 as uuidV4 } from "uuid"

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){
    const[item, setTarefa] = useState("");
    const[tempo, setTempo] = useState("00:00");

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    item,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidV4()
                }]);
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa"
                    value={item}
                    onChange={event => setTarefa(event.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={tempo}
                    onChange={event => setTempo(event.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
    );
}

export default Formulario;