<script>
    import { getWeather } from './services/weather';
    import Footer from './footer.svelte';
    let query = 'Barcelona';
    $: isDay = true;
    let country = '';
    let region = '';
    let humidity = '';

    async function getWeatherData(query) {
		const response = await getWeather(query);
        isDay = response.isDay;
        country = response.country;
        region = response.region;
        humidity = response.humidity;
		return response;
	}

    $: weatherPromice = getWeatherData(query);


</script>

<style>
    section {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0.5em;
        display: flex;
        flex-direction: column;
    }
    .night {
        background-color: rgba(0, 70, 255, 0.1);
    }
    .day {
        background-color: rgba(255, 255, 58, 0.1);
    }
    .tmp {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 150px;
        height: 150px;
        border-radius: 100%;
        background-color: rgba(0, 244, 211, 0.3); 
        margin: 20% auto;
    }
    div {
        padding: 10px;
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

    h4 {
        float: right;
        margin: 10px;
    }

    h5 {
        text-align: center;
        font-size: 30px;
        margin: 15px 0 0 0;
    }
    .form_field {
        font-family: inherit;
        width: 50%;
        border: 0;
        border-bottom: 2px solid grey;
        outline: 0;
        font-size: 1.3rem;
        color: black;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    
    }

    .form_field::placeholder {
        color: transparent;
    }

    .form_field:_placeholder-shown ~ .form__label {
        font-size: 0.5rem;
        cursor: text;
        top: 20px;
    }

    .form_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: gray;
    }

    .form_field:focus {
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #44abff, #9b9b9b);
    border-image-slice: 1;
    }
</style>

<section class={isDay ? 'day' : 'night'}>
    <div class="form__group field">
        <input
            type="input"
            bind:value={query}
            class="form_field"
            placeholder="find city"
            name="find"
            id='find'
            required
        />
        <label for="find" class="form_label">Find city:</label>
      </div>
    {#await weatherPromice}
        <p>...waiting</p>
    {:then weather}
        <div>
            <h2>{weather.name}</h2>
            {#if weather.isDay}
                <img src="http://cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sol">
            {:else}
            <img src="http://cdn.weatherapi.com/weather/64x64/night/113.png" alt="luna">
            {/if}
            <h4>{weather.conditionTest}</h4>
        </div>
        <h5>{weather.localtime}</h5>
        <div class="tmp">
            <h3>{weather.temp}° </h3>
            <img src={weather.conditionIcon} alt="" />
        </div>
        <Footer {country} {region} {humidity}/>
    {:catch error}
        <div>
            <p style="color: blue">Error Intenta de nuevo</p>
        </div>
    {/await}
</section>
