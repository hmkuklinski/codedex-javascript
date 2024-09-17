let yuan = 560;
let yen = 2455;
let won = 3280;

const yuan_usd = yuan*0.14;
const yen_usd = yen* 0.0077;
const won_usd= won = won * .00080;

const total_USD= yuan_usd + yen_usd + won_usd;
console.log(total_USD);