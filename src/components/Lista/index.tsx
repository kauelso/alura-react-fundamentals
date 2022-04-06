import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./List.module.scss"

function Lista({tarefas} :{tarefas: Array<ITarefa>}){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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