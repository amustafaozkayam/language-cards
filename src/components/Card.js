import React, { useState } from "react";

export default function Card({ name, img, options }) {
  const [isVisible, setIsvisible] = useState(true);
  // const [isClik, setClik] =useState(true)
  return (
    <>
      <div
        key={name}
        className="card"
        onClick={() => {
          setIsvisible(!isVisible);
          setTimeout(() => {
            setIsvisible(isVisible);
          }, 3000);
        }}
      >
        {isVisible ? (
          <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
          </div>
        ) : (
          <ul className="info">
            {options.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
