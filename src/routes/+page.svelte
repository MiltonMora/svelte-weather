<script>
    import { getWeather } from './services/weather';
    const weatherPromice = getWeather();
</script>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 150px;
        height: 150px;
        border-radius: 100%;
        background-color: rgba(0, 244, 211, 0.3); 
        margin: 50% auto;
    }

    h2 {
        float: left;
        font-size: 35px;
        margin: 10px;
    }

    h3 {
        font-weight: 400;
        font-size: 70px;
        top: 50%;
        left: 50%;
    }

    img {
        float: right;

    }    
</style>

{#await weatherPromice then weather }
    <h2>{weather.name}</h2>
    <img src={weather.conditionIcon} alt="" />
    <div>
        <h3>{weather.temp} </h3>
    </div>
{/await}