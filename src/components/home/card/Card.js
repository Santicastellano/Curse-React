import ApiList from "../../../APIrest/ApiList";
import {Link} from "react-router-dom"
import Character from "../../../screens/home/Character/Character";

const CardContainer = (Character) =>{


    return (
        <div className="cardContainer">
            <Link to={`character/:${Character.name}`}>
                <ApiList/>
            </Link>
        </div>
    );
}
export default CardContainer;