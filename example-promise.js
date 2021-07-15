function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('One of the parameters is not a number');
    }
  });
}

addPromise(5, '7').then(function(total) {
  console.log('promise success: ', total);
}, function(err) {
  console.log('promise error: ', err);
});
