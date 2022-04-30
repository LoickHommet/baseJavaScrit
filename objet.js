

let episode = {
    title : "Je suis encore dessus",
    duration : 50,
    hasBeenWatched : false

}


document.querySelector("#episode-info").innerHTML = 
`Titre : ${episode.title} <br>
Duree : ${episode.duration} <br>
${episode.hasBeenWatched ? 'DEjas vu ' : "pas vue"}
`