const friends = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0
};

function getTotals (names, input) {
  input.split('').forEach((score) => {
    const lower = score.toLowerCase();
    if (names.hasOwnProperty(score)) {
      names[score]++;
    } else if (names.hasOwnProperty(lower)) {
      names[lower]--;
    }
  });
  return names;
}

function orderTotals (totals) {
  return Object.keys(totals)
          .map((key) => totals[key])
          .sort()
          .reverse();
}

function getIndexObj (totals) {
  const indexObj = {};
  Object.keys(totals).forEach((item) => indexObj[`${totals[item]}_${item}`] = item);
  return indexObj;
}

function getOrderedObj(orderedTotal, indexObj, totals) {
  const result = {};
  orderedTotal.forEach((score) => {
    Object.keys(totals).forEach((key) => {
      const theKey = `${score}_${key}`;
      if(indexObj.hasOwnProperty(theKey)) {
        result[key] = totals[key];
      }
    });
  });
  return result;
}

function tally (input) {
  const totals = getTotals(Object.assign({} ,friends), input);
  const orderedTotal = orderTotals(totals);
  const indexObj = getIndexObj(totals);
  return getOrderedObj(orderedTotal, indexObj, totals);
}

module.exports = {
  tally
};
