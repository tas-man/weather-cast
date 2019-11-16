import React from 'react';

const AppBar = ({ fetchData }) => {
  const formSubmit = e => {
    e.preventDefault();
    const city = document.getElementById('cityNameInput').value;
    fetchData(city);
  };

  return (
    <section className="hero is-primary is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-3">WeatherCast</h1>
          <form onSubmit={formSubmit}>
            <div className="field is-grouped is-expanded">
              <div className="columns">
                <div className="column is-two-thirds">
                  <div className="control">
                    <input
                      id="cityNameInput"
                      className="input is-primary"
                      type="text"
                      placeholder="Enter the name of a city"
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <button className="button is-dark">
                      Show Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppBar;
