import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

export default function Item({item,tempo,selecionado,completado,id,selecionaTarefa}: Props){
    return(
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ""}`}
            onClick={()=>selecionaTarefa({
            item,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{item}</h3>
            <p>{tempo}</p>
        </li>
    )
}