import { useState } from "react";
import Item from "./item";
import style from "./List.module.scss"

function Lista(){
    const [tarefas, setTarefas] = useState([{
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
    }]);
    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, {item: "Estudar estado", tempo: "05:00:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa,index) => (
                    <Item
                        key={index}
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;