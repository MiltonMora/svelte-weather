import { json } from '@sveltejs/kit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


export async function GET(event) {
    const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Barcelona', options);
	const data = await response.json();

    return json(data);
}
