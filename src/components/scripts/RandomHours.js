let randomHours= []

function getRandomTime() {
    var hours = Math.floor(Math.random() * 24); 
    var minutes = Math.floor(Math.random() * 60); 
  
    // Format the time as a string with leading zeros
    var timeStr = 
      (hours < 10 ? '0' : '') + hours + ':' +
      (minutes < 10 ? '0' : '') + minutes 
  
    return timeStr;
  }
  
 

  for(let i=1; i<=10; i++){
    randomHours.push(getRandomTime());
  }
  


  module.exports = randomHours;