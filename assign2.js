document.addEventListener("DOMContentLoaded", function(){

    /* url of song api --- https versions hopefully a little later this semester */	
const songAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/music/songs-nested.php';

let songJSON = localStorage.getItem("songStuff")
if (songJSON)

{
    songData = JSON.parse(songJSON)
    mainApplication(songData)
}

else{

    fetch(songAPI)
    .then(response=> response.json())
    .then(songData=>{

      /*needs to be string to store*/  
      localStorage.setItem("songStuff", JSON.stringify(songData))
      mainApplication(songData) 
    })

    .catch((error) => {
        console.error('Error:', error);
      })
}

})

function mainApplication(songData){
/*all main code in here*/
 console.log(songData[0].song_id)

const popupDiv = document.querySelector("#creditPopup")

const credit = document.querySelector("#creditButton")


credit.addEventListener('mouseover', function(){

    popupDiv.classList.remove("hide")
  

})


credit.addEventListener('mouseout', function(){
    popupDiv.classList.add("hide")
})


}




