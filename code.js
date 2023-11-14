function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}
function stopFun(){
    //log debugging
    console.log("stopFun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //turn on start button
    document.getElementById("startButton").disabled = false;
    //stop marquee 
    document.getElementById("myMarquee").stop();
}