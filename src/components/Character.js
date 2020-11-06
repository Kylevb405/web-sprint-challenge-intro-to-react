// Write your Character component here
import React from 'react';
import styled from 'styled-components'
// Name, Gender, Height, Mass, BirthYear, Eye Color, Hair Color, Skin Color

const Card = styled.div`

    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`

const CharacterInfo = styled.div`

    align-self: center;
    margin-bottom: 20px;
    width: 45%;
    background-color : ${props => props.theme.primaryColor};

`

const Character = ({CharacterData}) => {
    
    return(

        <Card>

            {CharacterData.map((CharacterData) => {

                return(

                    <CharacterInfo>
                        <h1>Name: {CharacterData.name}</h1>
                        <h1>Gender: {CharacterData.gender}</h1>
                        <h1>Height: {CharacterData.height}</h1>
                        <h1>Mass: {CharacterData.mass}</h1>
                        <h1>Birth Year: {CharacterData.birth_year}</h1>
                        <h1>Eye Color: {CharacterData.eye_color}</h1>
                        <h1>Hair Color: {CharacterData.hair_color}</h1>
                        <h1>Skin Color: {CharacterData.skin_color}</h1>
                    </CharacterInfo>

                )

            })}

            
        </Card>

    )
}

export default Character