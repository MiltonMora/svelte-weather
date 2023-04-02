export async function getWeather(query = 'Barcelona') {
    const data = await fetch(`/api/weather_api?q=${query}`).then(res => res.json());

    const { location, current } = data;
    const { name, region,  country, localtime } = location;
    const { temp_c, is_day,  condition, humidity } = current;

    return {
        conditionTest: condition.text,
        conditionIcon: condition.icon,
        name,
        region,
        country,
        localtime,
        temp: temp_c,
        isDay: is_day,
        humidity
    }
}