import Breeds from "./components/Breeds.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Breeds as BreedsType } from "./interfaces/Breeds.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
    text-align: center;
`;

export default function App() {

    const [data, setData] = useState<BreedsType>({});

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://dog.ceo/api/breeds/list/all");
            const { message }: { message: BreedsType } = await rawData.json();
            setData(message);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));
    }, [Object.keys(data).length]);

    return (
        <ParentDiv>
            <h1>List of All Dog Breeds</h1>
            <Breeds breeds={data} />
        </ParentDiv>
    );
}