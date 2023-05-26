<script>
    import Card from "$lib/card.svelte";

    export let data;
    let characters = data.characters;
    console.log(characters);

    //base link
    const BASE_URL = "https://rickandmortyapi.com/api";
    // let characters = [];
    // random page generator
    let pageMin = 2;
    let pageMax = 43;
    // let randomPage = Math.floor(Math.random() * (pageMax - pageMin) + pageMin);

    let charMin = 0;
    let charMax = 826;
    //random characters
    // for(let i = 0; i < 6; i++){
    //     characters.push(Math.floor(Math.random() * (charMax - charMin) + charMin))
        
    // }
    // console.log(characters);
    //fetch api
    // fetch(`${BASE_URL}/character/${characters}`)
    // .then(response => response.json())
    // .then(data => console.log(data));
    // return data;
    // console.log(data);

    //I can log the results of 6 random characters but I have no idea how to get them out of the fetch

    
</script>

<div class="grid">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
</div>

<style> 
    .grid{
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            gap:30px;
    }
</style>