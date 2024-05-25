function delayedPromise(value, ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, ms);
    });
}
  
const promisestask1 = [
    delayedPromise('Завдання 1', 500),
    delayedPromise('Завдання 2', 1000),
    delayedPromise('Завдання 3', 1500),
    delayedPromise('Завдання 4', 2000),
    delayedPromise('Завдання 5', 2500)
];
  
Promise.all(promisestask1)
    .then(results => {
      console.log("Результат:");
      results.forEach(result => {
        console.log(result);
      });
    });
  

// ===================================2===================================

function randomDelay(value) {
    const ms = Math.random() * (5000 - 1000) + 1000;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, ms);
    });
  }
  
const promisestask2 = [
    randomDelay('Завдання 1'),
    randomDelay('Завдання 2'),
    randomDelay('Завдання 3'),
    randomDelay('Завдання 4'),
    randomDelay('Завдання 5')
];
  
Promise.race(promisestask2)
    .then(result => {
      console.log("Найшвидший проміс:", result);
    });
  