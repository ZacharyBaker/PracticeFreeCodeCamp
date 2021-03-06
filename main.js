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
	str = str.slice(0, num - 3) + "...";

	return str;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
//-----------------------------

function chunk(arr, size) {
	var counter = arr.length / size;
	if (counter % 1 !== 0) counter = Math.ceil(counter);
	var finalArr = [];
	for (var i = 0; i < counter; i++) {
		var arrToAdd = [];
		for (var j = 0; j < size; j++) {
			if (typeof (arr[j]) === "number" || typeof (arr[j]) === "string") {
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
	for (var i = 0; i < thing2.length; i++) {
		if (arr[0].toLowerCase().indexOf(thing2[i]) !== -1) result = true;
		else return false;
	}
	return result;
}

mutation(["hello", "hey"]);
//------------------------------

function bouncer(arr) {
	var myArr = [];
	arr.forEach(function (e) {
		if (e) myArr.push(e);
	})
	return myArr;
}

bouncer([7, "ate", "", false, 9]);
//--------------------------------

function destroyer(arr) {
	// Remove all the values
	for (var i = 1; i < arguments.length; i++) {
		for (var j = arr.length - 1; j >= 0; j--) {
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
	for (var i = 0; i < arr.length; i++) {
		if (num <= arr[0]) return 0;
		else if (num > arr[i] && num <= arr[i + 1]) return i + 1;
		else if (num > arr[i] && i === arr.length - 1) return i + 1;
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
	for (var i = 0; i < splitStr.length; i++) {
		for (var prop in code) {
			if (prop === splitStr[i]) {
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
	if (arr[0] > arr[1]) {
		begin = arr[1];
		end = arr[0];
	} else {
		begin = arr[0];
		end = arr[1];
	}
	for (var i = begin; i <= end; i++) {
		sum += i;
	}
	return sum;
}

sumAll([1, 4]);
//--------------------

function diff(arr1, arr2) {
	var newArr = [];
	arr1.forEach(function (e) {
		if (arr2.indexOf(e) === -1) newArr.push(e);
	})
	arr2.forEach(function (e) {
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

	for (var i = 0; i < decimals.length; i++) {
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
	for (var i = 0; i < collection.length; i++) {
		for (var prop in source) {
			if (collection[i][prop] === source[prop]) {
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
		for (var i = 0; i < str.length; i++) {
			if (/[^aeiou]/.test(str[0])) {
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
	str.forEach(function (e) {
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
	for (var i = 0; i < str.length; i++) {
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

	if (typeof (bool) !== "boolean") return false;
	else return true;

}

boo(null);
//----------------------------

function unite(arr1, arr2, arr3) {
	var myArr = [];
	for (var arg in arguments) {

		for (var i = 0; i < arguments[arg].length; i++) {
			if (myArr.indexOf(arguments[arg][i]) === -1) myArr.push(arguments[arg][i]);
		}

	}
	return myArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//---------------------------


//https://dev.w3.org/html5/html-author/charref check out this site
// & === &​amp; 
// ' === &apos;
// < === &lt;
// > === &gt;
// " === &quot;

function convert(str) {

	str = str.replace(/[&]/g, "&amp;");
	str = str.replace(/[']/g, "&apos;");
	str = str.replace(/[<]/g, "&lt;");
	str = str.replace(/[>]/g, "&gt;");
	str = str.replace(/["]/g, "&quot;");
	return str;
}

convert("Dolce & Gabbana");
//------------------------------------------

function spinalCase(str) {
	return str.toLowerCase().replace(/\s/g, "-");

}

spinalCase('This Is Spinal Tap');
//-----------------------------------------

function sumFibs(num) {
	var sum = 0;
	var fib = [1, 1];

	while (fib[fib.length - 1] + fib[fib.length - 2] <= num) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	}

	for (var i = 0; i < fib.length; i++) {
		if (fib[i] % 2 !== 0) {
			sum += fib[i];
		}
	}
	return sum;
}

sumFibs(4);
//-----------------------------------------------

function sumPrimes(num) {
	var primes = [];


	for (var j = 2; j <= num; j++) {
		var isPrime = true;


		for (var i = 2; i < j; i++) {

			if (j % i === 0) {
				isPrime = false;
				break;
			} else {

			}
		}
		if (isPrime === true) primes.push(j);

	}

	return primes.reduce(function (prev, current) {
		return prev + current;
	});

}

sumPrimes(10);
//------------------------------------------------

//maybe this will help
//http://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
function smallestCommons(arr) {
	var lCM;
	var myArr = [];
	if (arr[1] < arr[0]) {
		myArr.push(arr[1]);
		myArr.push(arr[0]);
	} else {
		myArr = arr;
	}
	var allNumsArr = [];
	for (var i = myArr[0]; i <= myArr[1]; i++) {
		allNumsArr.push(i);
	}

	var numsToMultiply = [];

	for (var j = 10; j > 0; j--) {
		var passed = allNumsArr.every(function (currVal) {
			return currVal % j === 0;
		});
    
		//numsToMultiply.push(j);
		allNumsArr = allNumsArr.map(function (e) {
			if (e % j === 0) {
				return e / j;
			} else {
				return e;
			}
		});

	}



}


smallestCommons([1, 5]);
//--------------------------------

function smallestCommons(arr) {

	var smallPrimes = [2, 3, 5, 7, 11, 13],
		multiplyThese = [[], [], [], [], [], []],
		holders = [[], [], [], [], [], []],
		total = 1;

	var dividePrimes = function (num) {
		for (var i = 0; i < smallPrimes.length; i++) {
			if (num % smallPrimes[i] === 0) {
				holders[i].push(smallPrimes[i]);
				dividePrimes(num / smallPrimes[i]);
			}
		}
		for (var k = 0; k < multiplyThese.length; k++) {
			if (holders[k].length > multiplyThese[k].length) {
				multiplyThese[k] = holders[k];
			}
			holders[k] = [];
		}
	};
	if (arr[0] > arr[1]) {
		for (var j = arr[0]; j >= arr[1]; j--) {
			dividePrimes(j);
		}
	} else {
		for (var l = arr[1]; l >= arr[0]; l--) {
			dividePrimes(l);
		}
	}

	for (var end = 0; end < multiplyThese.length; end++) {
		if (multiplyThese[end].length > 0) {
			total = total * Math.pow(smallPrimes[end], multiplyThese[end].length);
		}
	}

	console.log(total);
	return total;

}
//---------------------

//INTERVIEW PROBS

for (var i = 0; i <= 100; i += 5) {
	console.log(100 - i);
}

// original thought process

function mine() {
	for (var i = 100; i >= 0; i -= 5) {
		console.log(i);
	}
}

//-------------------------

function find(arr, func) {
	for (var i = 0; i < arr.length; i++) {

		if (func(arr[i])) {
			return arr[i];
		}

	}

}

find([1, 2, 3, 4], function (num) { return num % 2 === 0; });
//---------------------------------

function drop(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) { return arr.slice(i); }

	}

	return [];
}

drop([1, 2, 3], function (n) { return n < 3; });

//----------------------

//resourse
//http://stackoverflow.com/questions/10865025/merge-flatten-a-multidimensional-array-in-javascript

function steamroller(arr) {

	for (var i = 0; i < arr.length; i++) {

		if (Array.isArray(arr[i])) {
			arr = [].concat.apply([], arr);
			steamroller(arr);
		}

	}

	return [].concat.apply([], arr);
}

steamroller([1, [2], [3, [[4]]]]);
//------------------------------

//resoure http://www.convertbinary.com/alphabet.php


function binaryAgent(str) {
	var chart = {
		A: "01000001",
		B: "01000010",
		C: "01000011",
		D: "01000100",
		E: "01000101",
		F: "01000110",
		G: "01000111",
		H: "01001000",
		I: "01001001",
		J: "01001010",
		K: "01001011",
		L: "01001100",
		M: "01001101",
		N: "01001110",
		O: "01001111",
		P: "01010000",
		Q: "01010001",
		R: "01010010",
		S: "01010011",
		T: "01010100",
		U: "01010101",
		V: "01010110",
		W: "01010111",
		X: "01011000",
		Y: "01011001",
		Z: "01011010",
		a: "01100001",
		b: "01100010",
		c: "01100011",
		d: "01100100",
		e: "01100101",
		f: "01100110",
		g: "01100111",
		h: "01101000",
		i: "01101001",
		j: "01101010",
		k: "01101011",
		l: "01101100",
		m: "01101101",
		n: "01101110",
		o: "01101111",
		p: "01110000",
		q: "01110001",
		r: "01110010",
		s: "01110011",
		t: "01110100",
		u: "01110101",
		v: "01110110",
		w: "01110111",
		x: "01111000",
		y: "01111001",
		z: "01111010",
		" ": "00100000",
		"'": "00100111",
		"!": "00100001",
		"?": "00111111"
	}

	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		for (var char in chart) {
			if (str[i] === chart[char]) {
				str[i] = char;
			}
		}
	}
	console.log(str);
	str = str.join('');
	console.log(str);
	return str;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//------------------------

function orderOperations() {
	return (2 + 2) * ((2 + 2) * 2);
}

//----------------------------------------------------

function getSize(width, height, depth) {

	var area = (2 * (width * height)) + (2 * (width * depth)) + (2 * (depth * height));
	var volume = width * height * depth;
	return [area, volume];

}
//-------------------------------------------------

function dudeMan(arr, func) {
	return arr.map(func);
}

dudeMan([1, 2, 3], function (e) {
	return e + 1;
})

//----------------------------------------------------------

function knightVsKing(knightPosition, kingPosition) {
	if (knightPosition[0] - kingPosition[0] < 2 && knightPosition[0] - kingPosition[0] > -2) {
		if (knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() < 2 && knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() > -2) {
			return "King";
		}
	}


	if (knightPosition[0] - kingPosition[0] === 1 || knightPosition[0] - kingPosition[0] === -1) {
		if (knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() === 2 || knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() === -2) {
			return "Knight";
		}
    }

	if (knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() === 1 || knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt() === -1)
		if (knightPosition[0] - kingPosition[0] === 2 || knightPosition[0] - kingPosition[0] === -2) {
			return "Knight";
		}


	return "None";
}
//better practice same idea
function knightVsKing2(knightPosition, kingPosition) {
	var diffX = Math.abs(knightPosition[1].charCodeAt() - kingPosition[1].charCodeAt());
	var diffY = Math.abs(knightPosition[0] - kingPosition[0]);

	if (diffX <= 1 && diffY <= 1) {
		return 'King'
	} else if (diffX == 1 && diffY == 2 || diffX == 2 && diffY == 1) {
		return 'Knight'
	}
	return 'None';
}

//-----------------------------------------

function every(collection, pre) {

	var truth = collection.every(function (e) {

		return e[pre];

	});

	return truth;

}

//-----------------------------------------
function movieIsh () {
	var idAndTitlePairs = [];
	var newReleases;
	newReleases.map(function (e) {
		idAndTitlePairs.push({ id: e["id"], title: e["title"] });
	})

	return idAndTitlePairs;
}
//---------------------------------------

function add() {
  var valid;
  for (var arg in arguments){
    if (typeof(arguments[arg]) !== "number"){
      valid = false;
      break;
    } else {
      valid = true;
      
    }
  }
  if (valid){
    if (arguments.length <= 1){
      var y = arguments[0];
      return function(x){
        if (typeof(x) === 'number'){
          return x + y;
        } else {return undefined;}
      };  
    }
    return arguments[0] + arguments[1];
  } else {
    
    return undefined;
    
  }
}

add(2, 3);


//--------------------------------

function none(arr, fun){
  
  for (var i = 0; i < arr.length; i++){
    if (fun(arr[i]) === true){
      return false;
    }
  }
 return true;
}
 
 function none2(arr, fun){
  return !arr.some(fun);
}
//----------------------------------

function SafeInteger(n) {

  if (n <= 9007199254740990){
    return true;
  }
  return false;

}

//-------------------------------------------

function findStrangeValue() {
  var x = {foo: 'bar'};
  return x === x;
}

//------------------

//Bug fix

var a = "code";
var b = "wa.rs";
var name = a + b;



//--------------------------------------

function swapValues() {
    var args = arguments[0];
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}


//-------------------------------

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    get Info() {
      return this.getInfo()
    } 
    
    getInfo(){
    return this.name + 's age is ' + this.age;
    
  }
}

class Person2 {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
  
}
//---------------------------------


function add2(a, b) {
  var num = Number(a) + Number(b);
  return String(num);
}

//---------------------------

var Person3 = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      for (var i = 0; i < f.length; i++){
        this._friends.push(f[i]);
      }
    }
  }
  return person;
}

//------------------------------------

function buildString(...template){
  return `I like #{template.join(',')}`;
}


//-------------------------
function last(list){


    if (arguments.length < 2){
    
      var lastChar = list.length - 1;
      return list[lastChar];
    }
    else {
     var lastChar = arguments.length - 1;
      return arguments[lastChar];
    }
}


//---------------------------

//python ish

if 4 < 5 and 9 > 3:
	print "happy babies"
else:
	print "sad babies"


//------------------------------------------

function anyArrows(arrows){
  if (arrows.length < 1){return false;};
  return arrows.some( val => {
              if (!val['damaged']) return true;
          });
}

function myCray(dude){
	
	if (dude.length > 9 && 6 > 3){
		console.log('Im a ckicken');
	} else if (dude === "lalalala"){
		console.log('Im probably spongebob.');
	} else {
		console.log('Im very confused.');
	}
	
}

//--------------------pure functions no side effects

function pure(x){
	var z = x;
	return function(y){		
		return z + y;		
	}	
}
var dude = pure(3);
dude();




//---------------------------
// Disallowed functionality:

// Strings
// Numbers
// Regular Expressions
// Functions named "Hello", "World", "HelloWorld" or anything similar.
// Object keys named "Hello", "World", "HelloWorld" or anything similar.
// Without using the above, output the string "Hello World!" to prove that there is always a way.
var helloWorld = function () {
  // Hello world!
}

//----------------------------------

function telephoneCheck(str) {
  // Good luck!
  return true;
}



telephoneCheck("555-555-5555");