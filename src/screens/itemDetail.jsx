import { useParams } from "react-router-dom";
import { useState } from "react";
import { itemList } from "../API/itemList";
import image from "../assets/chair.jpg"

const ItemDetail = () => {

    let { tittle } = useParams();
    // let [count, setCount] = useState(0);
    return (
        <div>
            {
                itemList.map(item => {
                    if (tittle === item.tittle) {
                        console.log(item.tittle);
                        
                    }
                })
            }
            {tittle}
            <div>nanananan</div>
        </div>

    )
}
export default ItemDetail;