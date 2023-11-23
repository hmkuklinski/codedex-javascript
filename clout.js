// Write code below 💖
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2300, 453, 5222, 6733, 7402, 8334];
const recentYouTubeViews = [989, 2300, 453, 5222, 6733, 7402, 8334];

//calculate mean of array passed in
function mean(viewsArray){
  let totalViews= 0; 
  let numberOfItems= viewsArray.length; //number of items in the array
  for (let i=0;i<viewsArray.length;i++){
    totalViews += viewsArray[i]; //adds value in array to totalViews
  }
  let mean= totalViews/numberOfItems;
  console.log("This is the mean: ", mean);
}

//calculate median number of array passed in
function median(viewsArray){
  let sortedStats= viewsArray.sort(); //organize from smallest to largest
  let middleIndex= Math.floor(viewsArray.length/2); //want rounded down middle number
  let medianValue= viewsArray[middleIndex]; //gets the value at this index
  console.log("The median value in this array is: ", medianValue);
}

console.log("Instagram data:");
mean(recentInstagramViews);
median(recentInstagramViews);

//tiktok
console.log("\nTikTok data:");
mean(recentTikTokViews);
median(recentTikTokViews);

//youtube
console.log("\nYouTube data:");
mean(recentYouTubeViews);
median(recentYouTubeViews);
