import ApiList from "../../APIrest/ApiList";
import {useParams} from "react-router-dom"

const ItemDetailContainer = ()=> {

    
    const {name} = useParams();

    return(
        <div>
            Este es el item detail container de cada personaje

            <p> {name} </p>

        </div>

    )
}

export default ItemDetailContainer;