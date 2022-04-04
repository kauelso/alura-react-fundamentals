import style from "./Item.module.scss";

export default function Item({item,tempo}: {item: string, tempo: string}){
    return(
        <li key={style.index} className={style.item}>
            <h3>{item}</h3>
            <p>{tempo}</p>
        </li>
    )
}