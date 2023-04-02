import { json } from '@sveltejs/kit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f12b8da574msh9bab97fb6841e63p1d974ajsn0b6265f99716',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


export async function GET(event) {
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona', options);
	const data = await response.json();

    return json(data);
}