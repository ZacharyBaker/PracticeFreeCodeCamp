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