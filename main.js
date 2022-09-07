function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/i9TmPASlq/model.json",modelready);
}
function modelready(){
    console.log("model is ready");
    classifier.classify(got_result);
}
function got_result(error,results){
    if (error){
       console.log("error");
    }
    else{
        console.log(results);
        label=results[0].label;
        accuracy=(results[0].confidence*100).toFixed(2);

        random_no_r=Math.floor(Math.random()*255)+1;
        random_no_g=Math.floor(Math.random()*255)+1;
        random_no_b=Math.floor(Math.random()*255)+1;

        document.getElementById("label").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        document.getElementById("accuracy").style.color="rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        document.getElementById("label").innerHTML=label;
        document.getElementById("accuracy").innerHTML=accuracy+"%";

        Img1=document.getElementById("alien1");
        Img2=document.getElementById("alien2");
        Img3=document.getElementById("alien3");
        Img4=document.getElementById("alien4");
console.log(label);
        if(label=="Clap"){

            Img1.src="aliens-01.gif";
            Img2.src="aliens-02.png";
            Img3.src="aliens-03.png";
            Img4.src="aliens-04.png";
        }
        else if(label=="Snap"){
            Img1.src="aliens-01.png";
            Img2.src="aliens-02.gif";
            Img3.src="aliens-03.png";
            Img4.src="aliens-04.png";
        }
        else if(label=="bell"){
            Img1.src="aliens-01.png";
            Img2.src="aliens-02.png";
            Img3.src="aliens-03.gif";
            Img4.src="aliens-04.png";
        }
        else{
            Img1.src="aliens-01.png";
            Img2.src="aliens-02.png";
            Img3.src="aliens-03.png";
            Img4.src="aliens-04.gif";
        }
    }
}
