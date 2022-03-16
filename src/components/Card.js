import React from 'react';
import  axios from 'axios';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function Card () {
    const [details, setDetails] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    let id = searchParams.get("token");
    console.log(id)

    //API
    const getExchange = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/"+id+"?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true"
        )
        setDetails(res.data);
        console.log(res.data)
    };
    useEffect(() => {
        getExchange();
      }, []);
      
    return (
        <div>
            <h2 className="text-center">{details.name}</h2>
            <div style={{backgroundColor:'#e6e4e1',borderRadius:'8px',boxShadow:'10px 7px 5px #737475'}} className="mx-2 px-2 py-2">
                <p><strong>Token :</strong> {details.symbol}</p>
                <p><strong>Market cap rank :</strong> {details.market_cap_rank}</p>
                {details.description ?
                    <p><strong>Description :</strong> {details.description['en']}</p>
                :
                <></>
                }
                <p><strong>Dernière mise à jour :</strong> {details.last_updated}</p>
                {details.links ?
                    <p><strong>Lien github :</strong> <a href={details.links.repos_url.github[0]}>{details.links.repos_url.github[0]}</a></p>
                :
                <></>
                }
            </div>
        </div>
    )
}
export default Card