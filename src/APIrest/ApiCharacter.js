import "./Card.css"

function ApiCharacter({character}) {
    return (
        <div className="Card" >
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        </div>
    )

}

export default ApiCharacter;