import React, { useState, useEffect } from "react";
import "./Cards.css";

// The data variable is the one that will store the data from "stays.json" and setData will help us to save this data in this variable. We need to initialize this variable as an empty array to avoid errors.
const CardsContainer = () => {
  const [data, setData] = useState([]);

  // Function to get data from "stays.json".
  const getData = async () => {
    // This try-catch statement is used to handle errors that may be generated when importing data from "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Here we store the data from "stays.json" in the data variable.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  // This Hook will execute the getData function every time the page is rendered.
  useEffect(() => {
    getData();
  }, []);
  // JSON elements 
  return (
    <div className="cards-container">
      {data.map((el, i) => (
        <div className="card" key={i}>
          <div className="imgs-cads">
            <img src={el.photo} alt={`image-${i}`} />
          </div>
          <div className="infos">
            <div className="inf1">
              {el.superHost && <p className="superHost">SUPER HOST</p>}
              <p className="tb">
                {el.type} {el.beds}
              </p>
            </div>
            <div className="inf2">
              <div className="star">
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <p>{el.rating}</p>
            </div>
          </div>
          <p className="inf3">{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
