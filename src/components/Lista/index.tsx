import React from "react";
import style from "./List.module.scss"

function Lista(){
    const tarefas = [{
        item: 'React',
        tempo: '02:00:00'
    },
    {
        item: 'Javascript',
        tempo: '01:00:00'
    },
    {
        item: 'Typescript',
        tempo: '03:00:00'
    }]
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa,index) => (
                    <li key={index} className={style.item}>
                        <h3>{tarefa.item}</h3>
                        <p>{tarefa.tempo}</p>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;