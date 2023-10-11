import React, {useState, useEffect} from "react";
import axios from "axios";
import Coin from "./Coin";

import {Typography} from "@mui/material";

const CoverComp = (props) => {
  function handleBackClick() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    // url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false",
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false",

    headers: {
      "X-RapidAPI-Key": "f08ab9d573mshd814384c2763d49p1e0283jsn71c1ca0d99d5",
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // taking the top four trending cryptos
        setCoins(response.data.slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="cover">
      <div className="cover_top">
        {/* <h1>Invest in ICOs like a pro.</h1>
        <p>Become a subscriber and know beforehand which ido to invest in</p> */}

        <Typography variant="h1" style={{color: "white", fontWeight: "600"}}>
          Invest in ICOs like a pro.{" "}
        </Typography>

        <Typography
          variant="h6"
          style={{
            fontWeight: "600",
            marginTop: "20px",
            marginBottom: "20px",
            "@media (max-width: 786px)": {
              fontWeight: "600",
              marginTop: "25px",
              marginBottom: "25px",
            },
          }}
        >
          Become a subscriber right now and chekout some awesome ICO
          investments.{" "}
        </Typography>
        <button className="yellow_button" onClick={handleBackClick}>
          Register Now
        </button>
      </div>

      <div className="cover_middle">
        <h1>Top 10 coins </h1>

        <div className="cover_grid">
          {coins.length > 0 ? (
            coins.map((coin) => {
              return (
                <Coin
                  key={coin.coin_id}
                  name={coin.name}
                  image={coin.image}
                  rank={coin.market_cap_rank}
                  price={coin.current_price}
                />
              );
            })
          ) : (
            <p>No coins in the array</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverComp;
