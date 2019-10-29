import React from 'react';
import '../styles/styles.css';
import conf from '../constants/config.json';
import Card from './Card';

const millisToSeconds = millis => {
  return Math.floor(millis / 1000);
};

const Main = ({ data }) => {
  let today = new Date();
  today = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
  );

  const futureDays = [];
  for (let i = 1; i < 7; i++) {
    futureDays.push(millisToSeconds(today + conf.DAY_MILLIS * i));
  }

  const getCardColor = fcastTime => {
    let dayNr = 0;
    for (let i = 0; i < futureDays.length; i++) {
      if (fcastTime > futureDays[i] || fcastTime === futureDays[i])
        continue;
      else {
        dayNr = i;
        break;
      }
    }
    return dayNr % 2 === 0
      ? conf.CARD_DEFAULT_COLOR
      : conf.CARD_COLOR;
  };

  return (
    <section className="section is-light-grey" name="Main">
      <div className="container">
        <h3 className="subtitle is-4 is-bold has-opacity-70">
          5 day forecast
        </h3>
        {data &&
          data.map(fcast => (
            <Card
              data={fcast}
              color={getCardColor(fcast.dt)}
              key={fcast.dt}
            />
          ))}
      </div>
    </section>
  );
};

export default Main;
