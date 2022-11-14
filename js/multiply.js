const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
let answer = 0;
const generate_equation = ()=>{
    let num1 = Math.floor(Math.random()*13);
    let num2 = Math.floor(Math.random()*13);
    let dummyAnswer1 = Math.floor(Math.random()*13);
    let dummyAnswer2 = Math.floor(Math.random()*13);
    answer = num1 * num2;  
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
const allAnswer=[answer, dummyAnswer1, dummyAnswer2];
const switchAnswer = [];
for(i = allAnswer.length; i--;) {
    switchAnswer.push(allAnswer.splice(Math.floor(Math.random()*(i+1)), 1)[0]);
}
console.log(switchAnswer);
    option1.innerHTML = switchAnswer[0];
    option2.innerHTML = switchAnswer[1];
    option3.innerHTML = switchAnswer[2];
}
option1.addEventListener("click", ()=>{
    if(option1.innerHTML == answer){
        generate_equation();
    }else{
        audio.play();
    }
});

option2.addEventListener("click", ()=>{
    if(option2.innerHTML == answer){
        generate_equation();
    }else{
        audio.play();
    }
});

option3.addEventListener("click", ()=>{
    if(option3.innerHTML == answer){
        generate_equation();
    }else{
        audio.play();
    }
});
generate_equation();