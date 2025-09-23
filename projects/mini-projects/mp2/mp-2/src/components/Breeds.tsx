import styled from "styled-components";
import type { Breeds as BreedsType } from "../interfaces/Breeds";

const AllBreedsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleBreedDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: darkorange;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Breeds(props: { breeds: BreedsType }) {
    return (
        <AllBreedsDiv>
            {Object.entries(props.breeds).map(([breed, subBreeds]) => (
                <SingleBreedDiv key={breed}>
                    <h1>{breed}</h1>
                    <p>Sub-breed Count: {subBreeds.length}</p>
                    {subBreeds.length > 0 ? (
                        <ul>
                            {subBreeds.map((sub) => (
                                <li key={sub}>{sub}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No sub-breeds</p>
                    )}
                </SingleBreedDiv>
            ))}
        </AllBreedsDiv>
    );
}