//https://youtu.be/NcUGT_-uoqE

// fetch("https://dog.ceo/api/breeds/image/random")
// .then ( response => response.json())

let btn = document.getElementById("btn")
let meme = document.getElementById("meme")
let text = document.getElementById("txt")

let url = "https://meme-api.com/gimme/"
let subreddits = ["wholesomemes","me_irl","dogmemes","dankmemes","memes"]

let getMemes = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    // console.log(randomSubreddit);
    fetch( "https://meme-api.com/gimme/" + randomSubreddit)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            text.innerHTML = data.title;
        }
        memeImg.src = data.url;
    });
};

btn.addEventListener("click", getMemes);
window.addEventListener("load", getMemes);