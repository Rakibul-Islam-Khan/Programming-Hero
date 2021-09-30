function ageToDays(age) {
    let day = ages * 365;
    let month = ages * 12;
    let hour = ages * 8760;
    let week = Math.round(ages * 52.1429);
    let minutes = ages * 525600;
    let second = ages * 3.154e7;
    let totalResult = { day, month, hour,week,minutes,second }
    return totalResult;
}
let ages =parseInt("20years");
const result = ageToDays(ages);
console.log(result);
// let date = new Date(m);
// console.log(date);