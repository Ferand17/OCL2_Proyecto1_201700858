start
  = number

number
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }