//conectando a la API
function api_data(){
    var filtro = document.getElementById("filtro").value
    // console.log(filtro)
    fetch(`https://pokeapi.co/api/v2/pokemon/${filtro}/`)
    .then(response => response.json())
    .then(data => {
        let Pokemons = document.querySelector(".results")
        // console.log(data)

        Pokemons.innerHTML= `
        <div id=pkm >
            <img src=${data.sprites.front_default}>
        </div>
        <div id=pkm_info>
            <h4 id="id">#ID ${data.id}</h4>
            <h4 id="nombre">Nombre: ${data.name}<h4>
            <h4 id="altura">Altura: ${data.height} ft</h4>
            <h4 id="peso">Peso: ${data.weight} Kg</h4>
            <h4> Tipo: ${data.types[0].type.name} </h4>
        </div>
        `
    });
}
//mostrar-ocultar-Menu
function toggleMenu(){
    let menuu = document.querySelector("#menu")
    menuu.classList.toggle("togle")
} 