var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3 className="text-center">It's it {temp} in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
