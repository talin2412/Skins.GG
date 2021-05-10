import React, { useEffect, useState } from "react";
import data from "./request";
import "./Row.css";

function Row({ title }) {
  const [skins, setSkins] = useState([]);


  useEffect(() => {
    setSkins(data[title]);
  }, [title]);


  return (
    <div>
      <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
          {skins.map((skin) => (
            <img
              key={skin.id}
              className="row__poster"
              src={require(`./splash/${title}_${skin.num}.jpg`).default}
              alt="Empty"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
