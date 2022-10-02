import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "../../style/body.css"

const Body = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
        .get('https://api.github.com/repos/NehaGujar1/sampletil/issues')
        .then(res => {
            console.log(res.data);
            setData(res.data);
            res.data.map((items) =>{
                console.log('items', items.title);
            })
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>Top Rated Articles</h1>
            <hr />
            <div className="Data">
                {
                    data.map((items) => (
                        <div className="each_element">
                            <a href={items.body}><h3>{items.title}</h3></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );

};

export default Body;