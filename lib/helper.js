exports['isArray'] = (function checkIfArray(param){
  return param instanceof Array;
});

exports['isDefined'] = (function checkIfDefined(param){
  return typeof param !== 'undefined';
});

exports['isInt'] = (function checkIfNumber(param){
  return (parseFloat(param) == parseInt(param)) && !isNaN(param);
});

exports['ranNum'] = (function randomNumberGenerator(max){
  max = max || 12987;
  return Math.floor( Math.random()*max );
});
