function telephoneCheck(str) {
  // Good luck!
  var phoneRegExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  return phoneRegExp.test(str);
}

telephoneCheck("555-555-5555");
