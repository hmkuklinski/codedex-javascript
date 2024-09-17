let stone= document.getElementById('stone');

let colorNumber = Math.floor(Math.random()*10)+1;

if (colorNumber == 1){
    stone.style.backgroundColor= "red";
}
else if (colorNumber == 2){
    stone.style.backgroundColor= "orange";
}
else if (colorNumber == 3){
    stone.style.backgroundColor= "yellow";
}
else if (colorNumber == 4){
    stone.style.backgroundColor= "green";
}
else if (colorNumber == 5){
    stone.style.backgroundColor= "blue";
}
else if (colorNumber == 6){
    stone.style.backgroundColor= "#4169e1";
}
else if (colorNumber == 7){
    stone.style.backgroundColor= "#00008b";
}
else if (colorNumber == 8){
    stone.style.backgroundColor= "purple";
}
else{
    stone.style.backgroundColor= "black";
}
