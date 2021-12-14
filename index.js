// algo 1 = 

const thirdAngle = (a,b) => 180 - (a+b)
console.log(thirdAngle(10, 60))
console.log('Hello')

// algo 2 = 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
     return true
    } else { 
     return false
    }
}
console.log(isLeapYear(2020))

//version ternaire
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false 
}
console.log(isLeapYear(2018))

