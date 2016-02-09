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