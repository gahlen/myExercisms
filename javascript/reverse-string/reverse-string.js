//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const reverseString = (str) => {
  const sArr = new Array();
  const rArr = new Array();
  let nStr = '';
  //const splitString = str.split("");
  for(let i = 0; i < str.length; i++) {
  sArr.push(str[i]);
  }
  console.log(sArr);

  //const reverse = sArr.reverse();
  for(let i = str.length - 1; i >= 0; i--) {
    rArr.push(sArr[i]);
    }
  console.log(rArr);

  //const join = rArr.join("");
  for (let i = 0; i < str.length; i++){
    nStr += rArr[i];
}
  
  return nStr;
};

console.log(reverseString("Gahlen"));



