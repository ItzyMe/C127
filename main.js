song=""
function preLoad(){
song=loadSound("music.mp3")
}

scoreRightWist=0
scoreLeftWist=0
RightWistx=0
RightWisty=0
LeftWistx=0
LeftWisty=0

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video=createCapture(VIDEO)
    // video.hide()

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)

}

function modelLoaded(){
console.log("PoseNet foi iniciado.")
}

function gotPoses(){
if(results.length>0){
    console.log(results)
    scoreRightWist=results[0].pose.keypoints[10].score
    scoreLeftWist=results[0].pose.keypoints[10].score
console.log("Score Right Wist=  "+scoreRightWist + "Score Left Wist=  " + scoreLeftWist)
RightWistx=results[0].pose.rightWist.x
RightWisty=results[0].pose.rightWist.y
console.log(" Right Wist x=  "+ RightWistx +" Right Wist y= " + RightWisty)

LeftWistx=results[0].pose.leftWist.x
LefttWisty=results[0].pose.leftWist.y
console.log(" Left Wist x=  "+ LeftWistx +" Left Wist y= " + LeftWisty)

}



}
