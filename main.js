function repeat(str, num) {
  // repeat after me
  if (num < 0) return "";
  str = str.repeat(num);
  return str;
}

repeat("abc", 3);
