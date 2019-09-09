//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 export const gigasecond = (gDate) => {
  
  let timeInSeconds = gDate.getTime() + Math.pow(10,12);
  let newDate = new Date(timeInSeconds);
  
  return newDate;
};

