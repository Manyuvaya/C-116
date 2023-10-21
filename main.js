nose_x=""
nose_y=""

function preload(){
    nosefilter=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
    canvas=createCanvas(350,350)
    canvas.center()

    video=createCapture(VIDEO)
    video.size(350,350)
    video.hide()

    poseNet=ml5.poseNet(video,modelLoded)
    poseNet.on("pose",got_result)
}
function draw(){
    image(video,0,0,350,350)
    image(nosefilter,nose_x,nose_y,30,30)
}
function modelLoded(){
    console.log("modelIsLoaded")
}
function got_result(result){
if(result.length>0){
    nose_x=result[0].pose.nose.x-3
nose_y=result[0].pose.nose.y
}
}