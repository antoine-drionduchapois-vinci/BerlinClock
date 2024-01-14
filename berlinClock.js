// berlinClock.js
function berlinClock(minutes) {
    let count = [0,0,0,0];
    if(minutes === 1){
         count = [1, 0, 0, 0];
    }else if (minutes === 2){
         count = [0, 1, 0, 0];
    }else if (minutes === 3){
         count = [0, 0, 1, 0];
    }else{
         count = [0, 0, 0, 1];
    }
    
    return count;
}

module.exports = { berlinClock };
