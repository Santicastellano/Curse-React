import { useEffect, useState } from 'react'
import ApiCharacter from './ApiCharacter';

function ApiList() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        }
        fetchData()
    }, []);

    return (
        <div className='container'>
            {
                characters.map(character => {
                    return (
                        <ApiCharacter key={character.id} character={character} />
                        
                    )
                })
            }
        </div>
    )
}

export default ApiList;
