
var word = "lighthouse in the house";
var wordNoSpace = word.replace(/\s/g,'');

var letters = {}

for(i = 0, length = wordNoSpace.length; i < length; i++) {
    var l = wordNoSpace.charAt(i);
    // console.log(l, i);
    if (letters.hasOwnProperty(l)) {
      letters[l].push(i);
    }
    else {
      letters[l] = [i]
    }
console.log(l, letters[l].join(" "))

}


