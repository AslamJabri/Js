//9.30 am adult and registered early
//11.00 am adult and registered late.
//12.30 pm all youth.
/*Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
        Early adults run at 9:30 am.
        Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).
*/
let raceNumber = Math.floor(Math.random() * 1000);
let runnerTime = false
let runnerAge = 18

if (runnerTime == true && runnerAge > 18) {
  raceNumber =  raceNumber + 1000 
}if (runnerAge > 18 && runnerTime == true){
    console.log(`the race will start at 9.30 am and your race number is ${raceNumber}`)
}else if ( runnerAge > 18 && runnerTime == false){
    console.log(`The race will start at 11.00am and your race Number is ${raceNumber}`)
}else if (runnerAge < 18){
    console.log(`The race will start at 12.30am and your race Number is ${raceNumber}`)
}else{
    console.log("Please contact registration desk")
}