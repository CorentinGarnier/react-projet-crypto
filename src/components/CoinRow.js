import React from "react";
import theme from "styled-theming";
import styled from "styled-components";

export const textColor = theme("theme", {
    light: "#000",
    dark: "#fff",
  });

  const TextColor = styled.span`
  font-family: sans-serif;
  color: ${textColor};
`;
  
const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td>
                <TextColor>
                    <span>{index}</span>
                </TextColor>
            </td>
            <td>
                <img src={coin.image} alt="{coin.name}" style={{width: '3%'}} className="me-4"/>
                <TextColor>
                    <span style={{color: textColor(theme)}}>{coin.name}</span>
                    <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
                </TextColor>
            </td>
            <td>
                <TextColor>
                    <span>{coin.current_price} $US</span>
                </TextColor>
            </td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger' }>
                {Math.round(coin.price_change_percentage_24h*100)/100} %
            </td>
        </tr>
    )
}
export default CoinRow