//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  export const value = (iArry) => {
  const rArry = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  return parseInt(iArry.map(x => rArry.indexOf(x)).join(""))
}
console.log(value(["brown", "red"]));
  

