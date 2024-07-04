function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEven = 0;
  let countEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
      countEven++;
    }
  }

  return countEven === 0 ? 0 : Number((sumEven / countEven).toFixed(2));
}


function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }

  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
