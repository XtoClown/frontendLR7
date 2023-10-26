let docBody = document.querySelector("body");
docBody.style.backgroundImage = "url(reserve.jpg)";
docBody.style.backgroundRepeat = "no-repeat"
docBody.style.backgroundSize = "100% 100%"
docBody.style.backgroundAttachment = "fixed";
docBody.style.fill = "white";

let mainDiv = document.createElement("div");
mainDiv.style.height = "100%";
mainDiv.style.width = "100%"; 
mainDiv.style.display = "flex";
mainDiv.style.justifyContent = "center";
mainDiv.style.alignItems = "center";
mainDiv.style.backgroundColor = "#0000002d";
docBody.appendChild(mainDiv);

let sphereDiv = document.createElement("div");
sphereDiv.style.height = "80%";
sphereDiv.style.width = "35%";
sphereDiv.style.display = "flex";
sphereDiv.style.justifyContent = "center";
sphereDiv.style.alignItems = "center";
sphereDiv.style.border = "0.3vw solid #b0dfd5";
sphereDiv.style.boxShadow = "0vw 0vw 4vw #8db4ac";
mainDiv.appendChild(sphereDiv);

let customForm = document.createElement("form");
customForm.style.height = "100%";
customForm.style.width = "100%";
customForm.style.display = "flex";
customForm.style.flexDirection = "column";
customForm.style.alignItems = "center";
customForm.style.fontFamily = "'Zeyada', cursive";
customForm.style.textAlign = "center";
customForm.style.color = "#b0dfd5";
sphereDiv.appendChild(customForm);

let customText = document.createElement("div");
customText.style.height = "10%";
customText.style.width = "100%";
customText.style.fontSize = "4rem";
customText.style.margin = "1vh 1vh 6vh 1vh";
customText.style.textAlign = "center";
customText.innerHTML = "Enter your question";
customForm.appendChild(customText);

let customInput = document.createElement("input");
customInput.style.height = "7%";
customInput.style.width = "70%";
customInput.style.borderRadius = "1vw";
customInput.style.margin = "1vh";
customInput.style.fontFamily = "'Zeyada', cursive";
customInput.style.fontSize = "2.7rem";
customInput.style.textAlign = "center";
customInput.style.textOrientation = "center";
customInput.style.color = "#b0dfd5";
customInput.style.backgroundColor = "#0000002d";
customInput.style.border = "0vh";
customInput.style.boxShadow = "0vw 0vw 4vw #8db4ac";
customForm.appendChild(customInput);

let spherePlace = document.createElement("div");
spherePlace.style.height = "59%";
spherePlace.style.width = "71%";
spherePlace.style.margin = "4.4vh 0vw 1vh 0vw";
spherePlace.style.display = "flex";
spherePlace.style.justifyContent = "center";
spherePlace.style.alignItems = "center";
spherePlace.style.borderRadius = "50%";
spherePlace.style.backgroundImage = "url(balls.png)";
spherePlace.style.backgroundRepeat = "no-repeat";
spherePlace.style.backgroundPosition = "center center";
spherePlace.style.backgroundSize = "113% 114%";
spherePlace.style.backgroundClip = "border-box";
spherePlace.style.boxShadow = "0vw 0vw 2vw #1d6656, 0vw 0vw 3vw #155346";
customForm.appendChild(spherePlace);

let sphereAnswer = document.createElement("div");
sphereAnswer.style.fontSize = "10rem";
sphereAnswer.style.height = "100%";
sphereAnswer.style.width = "100%";
sphereAnswer.style.display = "flex";
sphereAnswer.style.justifyContent = "center";
sphereAnswer.style.alignItems = "center";
sphereAnswer.style.borderRadius = "100%";

spherePlace.onclick = () => {
    if(customInput.value != "")
    {
        let rnd = Math.floor(Math.random()*2);
        if(rnd == 0){
            shake();
            setTimeout(()=>{
                stopShake();
                sphereAnswer.innerHTML = "Yes";
                spherePlace.appendChild(sphereAnswer);
                sphereAnswer.style.backgroundColor = "#2c7e3a31";
                spherePlace.style.boxShadow = "0vw 0vw 3vw #2c7e3a";
                customInput.style.color = "#398145";
                customForm.style.color = "#398145";
                sphereDiv.style.border = "0.3vw solid #2c7e3a";
                sphereDiv.style.boxShadow = "0vw 0vw 3vw #2c7e3a";
                customInput.style.backgroundColor = "#2c7e3a31";
                mainDiv.style.backgroundColor = "#2c7e3a31";
                setTimeout(clearFunc,2000);
            },2000);
        }
        if(rnd == 1){
            shake();
            setTimeout(()=>{
                stopShake();
                sphereAnswer.innerHTML = "No";
                spherePlace.appendChild(sphereAnswer);
                sphereAnswer.style.backgroundColor = "#91191931";
                spherePlace.style.boxShadow = "0vw 0vw 3vw #911919";
                customInput.style.color = "#b33232";
                customForm.style.color = "#b33232";
                sphereDiv.style.border = "0.3vw solid #b33232";
                sphereDiv.style.boxShadow = "0vw 0vw 3vw #b33232";
                customInput.style.backgroundColor = "#91191931";
                mainDiv.style.backgroundColor = "#91191931";
                setTimeout(clearFunc,2000);
            },450);
        }
    }
};

let trigger;

function shake(){
    trigger = setInterval(()=>{
        spherePlace.style.margin = "4.4vh 0vw 1vh 0vw";
        let rndMargin = Math.random();
        let rndSide = Math.floor(Math.random()*4);
        console.log(rndMargin);
        let top = 4.4;
        let right = 0;
        let left = 0;
        if(rndSide == 0){
            top+=rndMargin;
            spherePlace.style.marginTop = top+"rem";
        }
        if(rndSide == 1){
            right+=rndMargin;
            spherePlace.style.marginRight = right+"rem";
        }
        if(rndSide == 2){
            top-=rndMargin;
            spherePlace.style.marginTop = top+"rem";
        }
        if(rndSide == 3){
            left+=rndMargin;
            spherePlace.style.marginLeft = left+"rem";
        }
    },25)
}

function stopShake(){
    clearInterval(trigger);
    spherePlace.style.margin = "4.4vh 0vw 1vh 0vw";
}

function clearFunc(){
    sphereAnswer.innerHTML = "";
    customInput.value = "";
    sphereAnswer.style.backgroundColor = "";
    spherePlace.style.boxShadow = "0vw 0vw 2vw #1d6656, 0vw 0vw 3vw #155346";
    customForm.style.color = "#b0dfd5";
    customInput.style.color = "#b0dfd5";
    sphereDiv.style.border = "0.3vw solid #b0dfd5";
    sphereDiv.style.boxShadow = "0vw 0vw 4vw #8db4ac";
    customInput.style.backgroundColor = "#0000002d";
    mainDiv.style.backgroundColor = "#0000002d";
}