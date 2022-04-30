let episodeTilte = "Je travail le samedi "
let episodeDuration= 45
let hasBeenWatched = true

document.querySelector("#episode-info").innerHTML = 
`Episode: ${episodeTilte} <br>
Duree: ${episodeDuration} <br>
${hasBeenWatched ? 'Dejas vu ' : "Pas vue"}

`