

class Episode {
     constructor(title, duration, hasBeenWatched){
         this.title = title,
         this.duration =  duration,
         this.hasBeenWatched = hasBeenWatched
     }
}

let fristEpisode = new Episode("Il est 15:11", 54, false)
let sencondEpisode = new Episode("Il est toujour 15:11", 20 , true)


document.querySelector("#episode-info").innerHTML = 
`Titre : ${fristEpisode.title} <br>
Duree : ${fristEpisode.duration} <br>
${fristEpisode.hasBeenWatched ? 'DEjas vu ' : "pas vue"}
`

document.querySelector("#episode-info2").innerHTML = 
`Titre ${sencondEpisode.title} <br>
Duree ${sencondEpisode.duration} <br>
 ${sencondEpisode.hasBeenWatched ? 'dejas vu ' : "pas vue"} <br>
`