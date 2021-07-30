
Webcam.set({
   width:350,
   height:300,
   image_format:"png",
   png_quality: 90
});

var camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result_image").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        
    });
}  
 
console.log('ml5.version', ml5.version)

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FjwR9fDBZ/model.json" , modelLoaded)

function modelLoaded()
    {
    console.log("modelLoaded");
    }
    
function Speak() {
 synth = window.speechSynthesis;
 speakdata1= "the first prediction is"+prediction1;
 speakdata2 = "the second prediction is"+prediction2;
 utterThis = new SpeechSynthesisUtterance(speakdata1+speakdata2);
 synth.speak(utterThis);
}

function check()
{
 img = document.getElementById("captured_image");
 classifier.classify(img,gotresult);
}
 
function gotresult(error,result)
{
    if (error)
    {
    console.error(error)
    }
    else 
    {
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML= result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction1=result[0].label;
        prediction2=result[1].label;
        Speak()
        
        if (result[0].label=="Happy")
        {
          document.getElementById("update_emoji").innerHTML= "&#128522;";
        }
        
        if (result[0].label=="Sad")
        {
            document.getElementById("update_emoji").innerHTML= "&#128532;";
        }
        
        if (result[0].label=="Angry")
        {
            document.getElementById("update_emoji").innerHTML= "&#128512";
        }
    
        if (result[1].label=="Happy")
        {
            document.getElementById("update_emoji").innerHTML= "&#128512";
        }
    
        if (result[1].label=="Sad")
        {
            document.getElementById("update_emoji").innerHTML= "&#128512";
        }
        if (result[1].label=="Angry")
        {
            document.getElementById("update_emoji").innerHTML= "&#128512";
        }
    }
    
} 


