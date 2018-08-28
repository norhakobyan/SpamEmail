var testStr = "hello sign in http//google.am, apple.com, send your password and credit card";

function spam (testStr) {
  var regV = /(\.com)|(\.ru)|(\.am)|(\.io)|(\.ge)|(https?\/\/)|password|email|credit card/gi;
  var result = testStr.match(regV);
  var len = testStr.length;
  if (result != null) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < len; ++i) {
    if (testStr.charCodeAt(i) < 0 || testStr.charCodeAt(i) > 126) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

spam (testStr);
