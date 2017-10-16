
var count = 1;

function takeANumber(katzDeliLine, newPerson) {
  // need array of numbers
  katzDeliLine.push(count);
  count++;
  return 'Welcome. You are number ' + katzDeliLine[katzDeliLine.length - 1];
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving number' + katzDeliLine.shift() +'.';
  }
}
// no longer want to store customer names in an array

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var line = '';
    for (var i = 0; i < katzDeliLine.length; i++) {
      line = line + ' ' + [i+1] + '. ' + katzDeliLine[i] + ',';
    }
    return 'The line is currently:' + line.slice(0, line.length - 1);
  }
}
