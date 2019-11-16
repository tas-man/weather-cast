import React from 'react';
import '../styles/styles.css';
import format from '../utils/format';

const Card = ({ data, color }) => {
  const { weather, main } = data;

  return (
    <div className={`card m-t-sm ${color}`}>
      <div className="card-content has-opacity-70">
        <div className="columns">
          <div className="column is-4">
            <p className="subtitle is-6 is-bold">{data.dt_txt}</p>
          </div>
          <div className="column is-4">
            <p className="subtitle is-5 is-capitalized is-bold">
              {weather[0].description}
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4" style={{ minWidth: '260px' }}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img
                    src={`./wicons/${weather[0].icon.substring(
                      0,
                      2,
                    )}x.svg`}
                    alt=""
                  />
                </figure>
              </div>
              <div className="media-right">
                <p className="title is-4 is-capitalized">
                  {format.round(main.temp)} &#8451;
                </p>
              </div>
            </div>
          </div>

          <div className="column is-4">
            <div className="left m-r-sm">
              <p>Humidity:</p>
              <p>Pressure:</p>
              <p>Max temp:</p>
              <p>Min temp:</p>
            </div>
            <div className="is-bold">
              <p>{main.humidity}</p>
              <p>{main.pressure}</p>
              <p>{main.temp_max}</p>
              <p>{main.temp_min}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
