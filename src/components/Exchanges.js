import React from 'react';
import  axios from 'axios';
import { useEffect, useState } from "react";

function Exchanges () {
    const [exchanges, setExchanges] = useState([]);

    const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase()
  );

    //API
    const getExchange = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/exchanges?per_page=10"
        )
        setExchanges(res.data);
    };
    useEffect(() => {
        getExchange();
      }, []);

    return(
        <div className="row mt-3">
            <h2>Liste des exchanges</h2>
            {filteredExchanges.map((exchange, index) => (
                <div className="col-2 mx-2">
                    <div className="d-flex flex-column justify-content-center mb-2">
                        <span key={index} ><a style={{textDecoration: 'none'}} href={exchange.url} target="_blank">{exchange.name}</a></span>
                        <img 
                            src={exchange.image} 
                            alt="{exchange.name}" 
                            style={{width: '10%'}} 
                            className="me-4"
                        />
                        {exchange.year_established !== null ?
                        <p>Date de création : {exchange.year_established}</p>
                        :
                        <p></p>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Exchanges