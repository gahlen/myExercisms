export const twoFer = (str) => {
    const newStr = str;
    console.log(str);
    if (newStr == undefined){
        return "One for you, one for me.";
    } else {
        return "One for " + newStr + ", one for me."
    }
    
}

console.log(twoFer("Alice"));