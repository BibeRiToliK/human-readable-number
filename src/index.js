let first = {
   "0":"",
   "1":"one",
   "2":"two",
   "3":"three",
   "4":"four",
   "5":"five",
   "6":"six",
   "7":"seven",
   "8":"eight",
   "9":"nine",
   "10":"ten",
 };
 let three = {
   
 };
module.exports = function toReadable (number) {
  let second = {
   "0":"",
   "2":"twenty",
   "3":"thirty",
   "4":"forty",
   "5":"fifty",
   "6":"sixty",
   "7":"seventy",
   "8":"eighty",
   "9":"ninety",
  };
  let res = '';
  let nStr = number.toString();
  for(i = 0; i < nStr.length; i=i+2) {
    res += foo(nStr[i])+" ";
  }
  let massive = (res.split(' '));
  let result = `${massive[0]} hundred ${second[nStr[1]]} ${massive[1]}`;
   if (nStr[1] !== "1") {
   return (result.trim()).replaceAll('  ', ' ');
   }
   if (nStr[1] === "1") {result = `${massive[0]} hundred ${second[nStr[1]]} ${massive[1]}`;}
}
function foo (n) {
   return(first[n])
};
