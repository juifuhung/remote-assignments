function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    callback(n1 + n2 + " (" + n1 + "+" + n2 + ")");
  }, delayTime);
}

delayedResult(6, 9, 3000, function(result) {console.log(result)});
delayedResult(-5, 10, 2000, function(result) {window.alert(result)});
