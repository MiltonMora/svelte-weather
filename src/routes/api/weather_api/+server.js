import { json } from '@sveltejs/kit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


export async function GET(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q');
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}` , options);
	const data = await response.json();

    return json(data);
}
