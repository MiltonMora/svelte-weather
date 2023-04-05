import { json } from '@sveltejs/kit';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f12b8da574msh9bab97fb6841e63p1d974ajsn0b6265f99716',
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