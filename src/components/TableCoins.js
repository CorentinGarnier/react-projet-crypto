import React from "react";
import CoinRow from "./CoinRow";
import theme from "styled-theming";
import styled from "styled-components";
import "../index.css"

export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
  });

  const TextColor = styled.span`
  font-family: sans-serif;
  color: ${textColor};
`;

const titles = [" ", "Coin", "Price", "Price Change - 24h"];
const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table mt-4 tableau">
      <thead >
        <tr>
            {titles.map((title, index) => (
                <td key={index}>
                  <TextColor>
                    <span>{title}</span>
                  </TextColor>
                </td>
            ))}
        </tr>
      </thead>
      <tbody>
          {filteredCoins.map((coin, index) => (
              <CoinRow coin={coin} key={index} index={index + 1}/>
          ))}
      </tbody>
    </table>
  );
};

export default TableCoins;