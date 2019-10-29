import React from 'react';
import '../styles/styles.css';
import format from '../utils/format';

const Header = ({ data }) => {
  const { weather, main } = data;

  return (
    <section className="section is-light-grey" name="header">
      <div className="container has-opacity-70">
        {weather && main && (
          <div className="card p-md">
            <div className="card-content">
              <div className="columns">
                <div className="column">
                  <p className="title" style={{ fontSize: '3rem' }}>
                    {data.name}
                  </p>
                  <p
                    className="title is-bold"
                    style={{ fontSize: '6rem' }}
                  >
                    {format.round(main.temp, 1)} &#8451;
                  </p>
                </div>
                <div className="column">
                  <p className="title is-4">
                    {weather[0].main} - {weather[0].description}
                  </p>
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
                <div className="column">
                  <div className="media">
                    <figure className="image is-256x256">
                      <img
                        src={`./wicons/${weather[0].icon.substring(
                          0,
                          2,
                        )}x.svg`}
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
