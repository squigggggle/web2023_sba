const BASE_URL = "https://rickandmortyapi.com/api";
let randomChar = [];
let charMin = 0;
let charMax = 826;
//selects 6 random characters from the amount of characters stated on the docs
for (let i = 0; i < 6; i++)
    {
        randomChar.push(Math.floor(Math.random() * (charMax - charMin) + charMin))

    }
console.log(randomChar);

export async function load() {
    const response = await fetch(`${BASE_URL}/character/${randomChar}`); //fetch a random set of 6 characters
    const characters = await response.json();
    if (characters) {
        // console.log(characters);
        return {
            characters,
        };
    }
    return {
        status: 404,
    };
}