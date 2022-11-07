import React from "react";
import '../styles/components/Card.css';
import { useNavigate } from "react-router-dom";

const Card = ({image, tittle, price}) => {

    const navigate = useNavigate();
    return (
                <div onClick={()=> navigate(`/producto/${tittle}`) } className="item-list-container">
                        <div className="card">
                            <img src={image} alt="card" className="card-img" />
                            <p className="tittle"> {tittle} </p>
                            <p>${price} </p>
                            
                        </div>
                        <button> - Guardar - </button>
                </div>
    
        
    )
}
export default Card;


