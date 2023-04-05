<script>
	import Box from './box.svelte';

	export let country;
    export let region;
    export let humidity;

</script>

<style>
	section {
		padding: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		align-content: center;
		justify-content: center;
		text-align: center;
	}
</style>

<section>
	<Box>
		<p>country</p>
		<p>{country}</p>
	</Box>
	<Box>
		<p>region</p>
		<p>{region}</p>
	</Box>
	<Box>
		<p>humidity</p>
		<p>{humidity}%</p>
	</Box>
</section>