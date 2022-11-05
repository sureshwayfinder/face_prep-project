import React, { useEffect, useState } from "react";
import axios from "axios";

import CryptoList from "../CryptoList/CryptoList";
import Loader from "../Loader/Loader";
import './Homepage.css'
import { Link } from "react-router-dom";

const PAGE_NUMBER = 1;

const Homepage = () => {
    const [coinsData, setCoinsData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
            );

            setCoinsData((prev) => {
                return [...prev, ...response.data];
            });
            setLoading(false);
        }, 1500);
    }, [page]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className="app">
            <div className="navbar">
                <h1>Crypto Gallery</h1>
                <div ><Link to ="/login" className="logout-btn">Logout</Link></div>
            </div>
            <CryptoList coinsData={coinsData} />
            {loading && <Loader />}
        </div>
    );
};

export default Homepage;