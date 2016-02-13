function repeat(str, num) {
  // repeat after me
  if (num < 0) return "";
  str = str.repeat(num);
  return str;
}

repeat("abc", 3);
//------------------

function truncate(str, num) {
  if (str.length <= num) return str;
  if (num <= 3) return str.slice(0, num) + "...";
  str = str.slice(0, num-3) + "...";
  
  return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
//-----------------------------

function chunk(arr, size) {
  var counter = arr.length/size;
  if (counter % 1 !== 0) counter = Math.ceil(counter);
  var finalArr = [];
  for (var i = 0; i < counter ; i++){
    var arrToAdd = [];
    for (var j = 0; j < size; j++){
      if (typeof(arr[j]) === "number" || typeof(arr[j]) === "string"){
        arrToAdd.push(arr[j]);
      }
    }
    finalArr.push(arrToAdd);
    arr.splice(0, size);
  }
  
  return finalArr;
}

chunk(["a", "b", "c", "d"], 2);
//----------------------------

function slasher(arr, howMany) {
  
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
//-------------------------------------

function mutation(arr) {
  var result;
  //var thing1 = arr[0].split('');
  var thing2 = arr[1].toLowerCase().split('');
  for (var i = 0; i < thing2.length; i++){
    if (arr[0].toLowerCase().indexOf(thing2[i]) !== -1) result = true;
   else return false;
  }
  return result;
}

mutation(["hello", "hey"]);
//------------------------------

function bouncer(arr) {
  var myArr = [];
  arr.forEach(function(e){
    if (e) myArr.push(e);
  })
  return myArr;
}

bouncer([7, "ate", "", false, 9]);
//--------------------------------

function destroyer(arr) {
  // Remove all the values
  for (var i = 1; i < arguments.length; i++){
    for (var j = arr.length - 1; j >= 0; j--){
      if (arguments[i] === arr[j]) arr.splice(j, 1);
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//-----------------------------

function where(arr, num) {
  arr.sort(function compareNumbers(a, b) {
    return a - b;
  });
  for ( var i = 0; i < arr.length; i++ ) {
    if (num <= arr[0]) return 0;
    else if (num > arr[i] && num <= arr[i + 1]) return i + 1;
    else if (num > arr[i] && i === arr.length-1) return i + 1;
  }
}

where([40, 60], 50);
//-------------------------------------

function rot13(str) {
 var code = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q", 
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M"
  };
  var splitStr = str.split("");
  for (var i = 0; i < splitStr.length; i++){
      for (var prop in code){
          if (prop === splitStr[i]){
              splitStr[i] = code[prop];
             break;
          }
      }
  }
  var codeman = splitStr.join('');
  return codeman;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//--------------------------------

function sumAll(arr) {
  var sum = 0;
  var begin;
  var end;
  if( arr[0] > arr[1]) {
    begin = arr[1];
    end = arr[0];
  } else {
    begin = arr[0];
    end = arr[1];
  }
  for (var i = begin; i<=end; i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
//--------------------

function diff(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(e){
    if (arr2.indexOf(e) === -1) newArr.push(e);
  })
  arr2.forEach(function(e){
    if (arr1.indexOf(e) === -1) newArr.push(e);
  })
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//---------------------------


function convert(num) {
  var romanArr = [];
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  for ( var i = 0; i < decimals.length; i++) {
    if (decimals[i] <= num) {
      num -= decimals[i];
      romanArr.push(roman[i]);
      i = -1;
      
    }
  }
  return romanArr.join('');
}

convert(36);
//---------------------------------

function where2(collection, source) {
  var arr = [];
  var hasAllProps;
  for (var i = 0; i < collection.length; i++){
    for (var prop in source) {
      if ( collection[i][prop] === source[prop]){
        hasAllProps = true;
      } else {
        hasAllProps = false;
        break;
      }
    }
    if (hasAllProps) arr.push(collection[i]);
  }
  return arr;
}

where2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//----------------------------------

function myReplace(str, before, after) {
  
  before = before.split('');
  after = after.split('');
  if (before[0] == before[0].toUpperCase()) after[0] = after[0].toUpperCase();
  before = before.join('');
  after = after.join('');
  
  return str.replace(before, after);
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//----------------------------
function translate(str) {
  
  str = str.split('');
  if (/[aeiou]/.test(str[0])) {
    str.push('way');
    return str.join('');
  } else {
    for (var i = 0; i < str.length; i++){
      if (/[^aeiou]/.test(str[0])){
        str.push(str[0]);
        str = str.slice(1);
        i = -1;
      } else {
        str.push('ay');
        str = str.join('');
        return str;
      }
    }
  }
}

translate("glove");
//-------------------------

function pair(str) {
  var answer = [];
  str = str.split('');
  str.forEach(function(e){
    if (e === "A") answer.push(["A", "T"]);
    else if (e === "T") answer.push(["T", "A"]);
    else if (e === "G") answer.push(["G", "C"]);
    else if (e === "C") answer.push(["C", "G"]);
  })
  return answer;
}

pair("GCG");
//-----------------------------

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++){
    if (str.charCodeAt(i) - str.charCodeAt(i + 1) < -1) {
      var num = str.charCodeAt(i) + 1;
      return String.fromCharCode(num);
    }
  }
  return undefined;
}

fearNotLetter("abce");
//----------------------------------

function boo(bool) {

  if (typeof(bool) !== "boolean") return false;
  else return true;

}

boo(null);
//----------------------------

function unite(arr1, arr2, arr3) {
  var myArr = [];
  for (var arg in arguments) {
    
    for (var i = 0; i < arguments[arg].length; i++){
      if (myArr.indexOf(arguments[arg][i]) === -1) myArr.push(arguments[arg][i]);
    }
    
  }
  return myArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//---------------------------


//https://dev.w3.org/html5/html-author/charref check out this site

function convert(str) {
  // &colon;&rpar;
  return str;
}

convert("Dolce & Gabbana");