import Header from './Header';
import TableCoins from "./TableCoins";
import theme from "styled-theming";
import styled from "styled-components";
import { useEffect, useState } from "react";
import  axios from 'axios';

export const backgroundColor = theme("theme", {
    light: "#fff",
    dark: "#2d2d2d",
  });
  
  export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
  });
  
  const Container = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

function Home () {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    //API
    const getData = async () => {
        const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        setCoins(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <Header/>
            <h1 className='h1 text-center mt-4'>Crypto Market Cap</h1>
            <div className='row mx-2'>
                <input type="text" placeholder="Search a Coin" className='search' autoFocus onChange={(e) => setSearch(e.target.value)}/>
                <TableCoins coins={coins} search={search}/>
            </div>
        </Container>
    )
}
export default Home