const intervalLoad = setInterval( startLoad, 350)

function startLoad(){

    const video = document.querySelector("video")

    if(video){
        clearInterval(intervalLoad)
        startYMF(video)
    }
}


function startYMF(video){

}
