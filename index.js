// Code your solution in this file!
const destination = 42

function distanceFromHqInBlocks(origin){
    return Math.abs(origin - destination);
}

function distanceFromHqInFeet(origin){
    let blocks = distanceFromHqInBlocks(origin);
    return blocks * 264;
};

function distanceTravelledInFeet(origin, destination){
    return (Math.abs(origin - destination)* 264);
}

// function calculatesFarePrice(origin, destintation){
//     const distance = distanceTravelledInFeet(origin, destination);
//     if (distance <= 400){
//         return 0;
//     } else if (distance > 400 && distance <=2000){
//         return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500){
//         return 25;
//     } else {
//         return 'cannot travel that far';
//     }
// }

function calculatesFarePrice (origin, destination) {
    const distance = distanceTravelledInFeet(origin, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }