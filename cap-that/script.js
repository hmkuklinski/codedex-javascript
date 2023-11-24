const memeArray = [
    "./the rock.jpg", 
    "./frye.jpg",
    "./jyp heart.jpg",
    "./Mocking-Spongebob.jpg",
    "./sad cat.jpg",
    "./shrek.jpg",
    "./take my money.jpg",
    "./thinking.jpg"
];

const captionsArray= [
    "When you get a 69% on an exam",
    "When an item is $19.99 and someone says keep the change",
    "When your parents pay for your car to be fixed",
    "When your gas tank hits E and you have 208 miles to your destination",
    "When the professor says attendance is mandatory",
    "When you compile your program and it displays 20 errors",
    "When your program works, but not the way you intended it to",
    "When your program finally works correctly",
    "When you say just 10 more minutes and then see the sun rising"
];

const meme= document.getElementById('random-meme');
const memeCaption= document.getElementById('random-caption');
const memeButton= document.getElementById('generator-button');

memeButton.addEventListener("click", function (){
    let random1= Math.floor(Math.random()*8);
    meme.src= memeArray[random1];
    let random2= Math.floor(Math.random()*9);
    memeCaption.innerText= captionsArray[random2];
})