// console.log("js running ==>")


// var currentDate = new Date()
// console.log("Current Date ==>", currentDate.toString().slice(0,15))

// let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wed", "Thur",
//     "Friday", "Saturday"]

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// console.log(daysOfWeek[currentDate.getDay()]);

// currentDate.toUpperCase()

// let arr = [1,2,3,4]
// console.log(arr);


// let dob = new Date("22 aug 2003")
// let dob = new Date()

// console.log(daysOfWeek[dob.getDay()]);
// console.log(months[dob.getMonth()]);

//console.log(dob.getMonth());

// dob.setFullYear(2003)
// dob.setMinutes(15)
// dob.setHours(1)
// dob.setSeconds(59)
// console.log(dob);


// 12-12-2026
// 21/2/2026
// 2 31 2026

// \======================================Task====================================/

// var date = new Date()
// console.log(date);

// date.getMilliseconds()


// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();   
//     var theSec = now.getSeconds(); 
//     var theMilli = now.getMilliseconds();
//     console.log("Current time: " + theHr + ":" + theMin + ":" + theSec+ ":" + theMilli);
// }
// tellTime()

    // var now = new Date();
    // var theHr = now.getHours();
    // var theMin = now.getMinutes();   
    // var theSec = now.getSeconds(); 
    // var theMilli = now.getMilliseconds();     
    // console.log(now);
    // console.log(theHr);
    // console.log(theMin);
    // console.log(theSec);
    // console.log(theMilli);
    
    // var d = new Date();
    
    // d.setDate(18)
    // d.setMonth(1)
    
    // console.log(d);
    
    // dob.setFullYear(2003)
    // dob.setMinutes(15)
    // dob.setHours(1)
    // dob.setSeconds(59)
    // console.log(dob);    
    
    // ==================FINALLY======================

var now=new Date()
console.log(now)

var ramzandate = new Date("2026-02-19")
console.log(ramzandate);

var nowMs = now.getTime()
var ramzandateMs = ramzandate.getTime()

console.log(nowMs)
console.log(ramzandateMs)

calculated_days = ramzandateMs - nowMs
console.log("calculated_days :" + calculated_days);

var Ms_oneday = 1000 * 24 * 60 * 60 ;
console.log(Ms_oneday);

total_daysremaining = Math.floor(calculated_days / Ms_oneday)
console.log(total_daysremaining);
