function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(120,190);

    canvas = createCanvas(550,550);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#FDFD96');
}

function modelLoaded()
{
    console.log('model intialized');
}

function gotPoses()
{
    if (results.length>0)
    {
        console.log(results);
    }
}