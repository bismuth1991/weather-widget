const getDayData = (data, numDaysInFuture) => {
  const startIdx = numDaysInFuture * 8;
  const endIdx = startIdx + 7;
  const noonIdx = startIdx + 4;
  let maxTemp = -Infinity;
  let minTemp = Infinity;
  let humiditySum = 0;
  let windSum = 0;

  for (let i = startIdx; i <= endIdx; i += 1) {
    const { main, wind } = data[i];
    humiditySum += main.humidity;
    windSum += wind.speed;
    if (maxTemp < main.temp_max) maxTemp = main.temp_max;
    if (minTemp > main.temp_min) minTemp = main.temp_min;
  }

  return {
    dtText: data[startIdx].dt_txt,
    status: data[noonIdx].weather[0].description,
    humidity: humiditySum / 8,
    wind: windSum / 8,
    high: maxTemp,
    low: minTemp,
  };
};

const transform = (res) => {
  const { city, list } = res;
  const day1 = getDayData(list, 1);
  const day2 = getDayData(list, 2);
  const day3 = getDayData(list, 3);
  const forcastData = [day1, day2, day3];
  return { cityInfo: { name: city.name }, forcastData };
};

export default transform;
