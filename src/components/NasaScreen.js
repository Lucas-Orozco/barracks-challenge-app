import React, { useEffect, useState } from "react";
import Slider from "react-animated-slider";
import horizontalcss from "react-animated-slider/build/horizontal.css";

export const NasaScreen = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    cargandoData();
  }, []);

  const cargandoData = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=XfPQjbIxWiodSDaQxPSk6fn7VH2oQbjKGerdLJT2"
    );
    const data = await response.json();

    setNews(data);
  };

  const { title, date, copyright, explanation } = news;
  let exp = "";
  if (explanation) {
    exp = explanation.slice(0, 110);
  }
  return (
    <div className='slider-container'>
      <Slider classNames={horizontalcss} direction="horizontal">
        <div
          style={{
            background:`url('${news.url}') no-repeat center center`,
            backgroundSize: 'cover',
            borderRadius:'8px'
          }}
        >
          <div className="text-container">
            <h2>{title + " / " + date}</h2>
          </div>
          <div>
            <p className="parrafo-texto">{exp}</p>
          </div>
          <span className='span-text'>{'Copyright: ' + copyright}</span>
        </div>
      </Slider>
    </div>
  );
};
