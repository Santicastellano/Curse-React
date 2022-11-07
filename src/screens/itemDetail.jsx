import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { itemList } from "../API/itemList";

const ItemDetail = () => {

    let { tittle } = useParams();
    const MyItem = useMemo(()=>itemList.find(i=>i.tittle===tittle),[tittle]);
    return (
        <div>
            <h1>{tittle}</h1>
            <pre>
                {JSON.stringify(MyItem,null,2)}
            </pre>
            <img width={800} src={MyItem.image} alt="imagen" />
        </div>
    )
}
export default ItemDetail;