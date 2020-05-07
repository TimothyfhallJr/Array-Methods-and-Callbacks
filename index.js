const fifaData = require('./fifa.js')
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// console.log(fifaData.(Home Team name.2014));
const worldCupFinal = fifaData.filter (match => match.Year === 2014 && match.Stage === `Final`)[0];
console.log(worldCupFinal[`Home Team Name`]);
console.log(worldCupFinal[`Away Team Name`]);
console.log(worldCupFinal[`Home Team Goals`]);
console.log(worldCupFinal[`Away Team Goals`]);
console.log(worldCupFinal[`Win conditions`].split(` `)[0]);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){ 
  return  data.filter(match => (match.Stage ==='Final'));
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(years) {
   return  years.map(match => match['Year']);
    /* code here */
    
};

console.log(getYears(getFinals(fifaData)));
// console.log(getYears(getFinals));


// /* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(Winners) {

return  Winners.map(obj => {
    if (obj['Home Team Goals'] > obj['Away Team Goals']) {
        return obj['Home Team Name'];
    } else {
        return obj['Away Team Name'];
    }
});
    /* code here */

};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1,cb2) {
return cb1.map((year, country) => {
    return `In ${year}, ${cb2[country]} won the world cup!`;
});
};

console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
const wins = data.reduce((Victories, games) => {
    const homeScores =games['Home Team Goals'];
    const awayScores = games['Away Team Goals'];

    if (homeScores > awayScores) {
        if (games['Home Team Initials'] === initials){
        return Victories + 1;
    }
    else {
        return Victories;
    }
 } else if (awayScores > homeScores){
     if (games['Away Team Initials'] === initials){
    return Victories + 1;
     
    }else {return Victories
 }
} else {
    return Victories;
} 
}, 0) 

return wins;
};

console.log(getCountryWins(fifaData,'ITA'));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */


    function getAverageGoals(data) {
        const homeGoals = data.map((ele) => {
            return ele["Home Team Goals"];
        });
        const awayGoals = data.map((ele) => {
            return ele["Away Team Goals"];
        });
    
        /* code here */
        const honeGoalsTotal = homeGoals.reduce((acc, item) => {
            return acc + item;
        });
    
        const awayGoalsTotal = awayGoals.reduce((acc, item) => {
            return acc + item;
        });
    
        return honeGoalsTotal / homeGoals.length + " " + awayGoalsTotal / awayGoals.length;
    };
    
   
    console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
