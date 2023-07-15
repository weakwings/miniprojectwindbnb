import React, { useState, useEffect } from "react";
import "./Cards.css";

const CardsContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
