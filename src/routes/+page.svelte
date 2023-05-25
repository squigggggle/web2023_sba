<style>

    .grid{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:30px;
    }

    .card{
        background:#333;
        overflow:hidden;
        height:240px;
        display:flex;      
        border-radius:20px;  
    }

    .image{
        width:30%;
        background-image:url('https://rickandmortyapi.com/api/character/avatar/119.jpeg');
        background-size:cover;
        background-position:center;
    }

    .info{
        padding-left:20px;
        padding-right:20px;
        padding-top:10px;
        padding-bottom:15px;
    }

    .dead{
        background:firebrick;
        width:10px;
        height:10px;
        border-radius:100%;
        margin-right:10px;
    }

    .name{
        font-family:sans-serif;
        color:white;
    }

    .status{
        font-family:sans-serif;
        color:white;
        display:flex;
        align-items:center;
    }

    .locationLabel{
        color:#777;
        font-family:sans-serif;
        font-size:16px;
        margin:0 0 5px;        
    }

    .location{
        color:white;
        font-family:sans-serif;
        font-size:16px;
        margin-bottom:20px;
        margin-left:0;
        margin-right:0;
        margin-top:0;
        margin-bottom:5px;
    }

    .location a{
        color:white;
        font-family:sans-serif;
        font-size:16px;
        margin-bottom:20px;
        margin-left:0;
        margin-right:0;
        margin-top:0;
        margin-bottom:5px;
    }


</style>

<script>
    //base link
    const BASE_URL = "https://rickandmortyapi.com/api";
    let characters = [];
    // random page generator
    let pageMin = 2;
    let pageMax = 43;
    let randomPage = Math.floor(Math.random() * (pageMax - pageMin) + pageMin);

    let charMin = 0;
    let charMax = 826;
    //random characters
    for(let i = 0; i < 6; i++){
        characters.push(Math.floor(Math.random() * (charMax - charMin) + charMin))
        
    }
    console.log(characters);
    //fetch api
    fetch(`${BASE_URL}/character/${characters}`)
    .then(response => response.json())
    .then(data => console.log(data));

    //I can log the results of 6 random characters but I have no idea how to get them out of the fetch
</script>

<div class="grid">

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

    <div class="card">
        <div class="image"></div>
        <div class="info">
            <h1 class="name">Evil Rick</h1>
            <h3 class="status"><div class="dead"></div> Dead - Humanoid</h3>

            <h3 class="locationLabel">Last known location</h3>
            <h3 class="location"><a href="#">Citadel of Ricks</a></h3>
        </div>
    </div>

</div>