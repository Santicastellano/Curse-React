import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { itemList } from "../API/itemList";
import Navbar from "../components/nav"
import "../styles/components/detailCard.css"

const ItemDetail = () => {

    let { tittle } = useParams();
    let [count, setCount] = useState(0);

    const MyItem = useMemo(() => itemList.find(i => i.tittle === tittle), [tittle]);
    return (
        <div>
            <Navbar />
            <div className="detail-container">
                <div className="detail-card">
                    <div className="image">
                        <img width={500} src={MyItem.image} alt="imagen" />
                    </div>

                    <div className="side-description" >
                        <h2>{tittle}</h2>
                        <p> {MyItem.description} </p>
                        <button onClick={() => setCount(count + 1)}> + </button>
                            <p> {count} </p>
                        <button onClick={() => setCount(count - 1)} > - </button>
                            <hr/>
                        <button> Comprar ahora </button>
                        <button> Agregar al carrito </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;