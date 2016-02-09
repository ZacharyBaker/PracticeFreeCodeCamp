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