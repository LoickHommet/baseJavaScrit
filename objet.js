

let episode = {
    title : "Je suis encore dessus",
    duration : 50,
    hasBeenWatched : false

}

let episodeTilte = episode['title']
let episodeDuration = episode['duration']
let episodeHasBeenWatched = episode['hasBeenWatched']


document.querySelector("#episode-info").innerHTML = 
`Titre : ${episodeTilte} <br>
Duree : ${episodeDuration} <br>
${episodeHasBeenWatched ? 'DEjas vu ' : "pas vue"}
`