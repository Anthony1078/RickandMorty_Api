import React, {useState, useEffect} from 'react'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const Characters = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacter(data.results))

    }, [])

    return (
        <div className="container">
            <div className="characters">
                {
                    character.map( item => (                        
                        <div className="box" key={item.id}>
                            <img className="image" src={item.image} alt={item.name}/>
                            <div className="character">   
                                <If condition={ item.name == "Abadango Cluster Princess"}>
                                    <p className="name">Abadango</p>
                                    <Else>
                                        <p className="name">{item.name}</p>                                        
                                    </Else>
                                </If>
                                <If condition={ item.species == "Human"}>
                                    <p className="specieHuman">{item.species}</p>
                                    <Else>
                                        <p className="specieAlien">{item.species}</p>                                        
                                    </Else>
                                </If>
                                <p className="status">{item.status}</p>                                
                                <If condition={ item.gender == "Male"}>
                                    <p className="genderMale">{item.gender}</p>
                                    <Else>
                                        <p className="genderFemale">{item.gender}</p>                                        
                                    </Else>
                                </If>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Characters