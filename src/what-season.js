module.exports = function getSeason(date) {
  //TODO add some regex 
  var month;
  if(typeof date == 'object') {
    month = date.getMonth();
    if(month >=0 && month <2) {
      return 'winter';
    } else if(month==11) {
      return 'winter';
    } else if(month >=2 && month <5) {
      return 'spring';
    } else if(month >= 5 && month<8) {
      return 'summer';
    } else if(month>= 8 && month <11) {
      return 'fall';
    } else {
    throw 'Error';
    }
  }
  if (date == null) {
  return 'Unable to determine the time of year!';
  }
};