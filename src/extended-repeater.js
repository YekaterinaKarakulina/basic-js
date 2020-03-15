module.exports = function repeater(str, options) {
    var repeatTimes = 1;
    var separator = '';
    var addition = '';
    var additionRepeatTimes = 0;
    var additionSeparator = '';
    var newStr = '';
    var finalAddition = '';

    if(typeof(options.repeatTimes) == 'undefined') {
        repeatTimes = 1;
    } else {
        repeatTimes = options.repeatTimes;
    }

    if(typeof(options.separator) == 'undefined') {
        separator = '+';
    } else {
        separator = options.separator;
    }
    
    if(typeof(options.addition) == 'undefined') {
        addition = '';
    } else {
        addition = options.addition;
    }
    
    if(typeof(options.additionRepeatTimes) == 'undefined') {
        additionRepeatTimes = 1;
    } else {
        additionRepeatTimes = options.additionRepeatTimes;
    }

    additionSeparator = options.additionSeparator;
    
    for(var j=0; j<additionRepeatTimes-1; j++)
    {
        finalAddition = finalAddition + (addition + additionSeparator);
    }

    finalAddition = finalAddition + addition;
    
    for(var i=0; i<repeatTimes-1; i++)
    {
        newStr = newStr + (str + (finalAddition) + separator);
    }
    newStr = newStr + str + finalAddition;
    return newStr;
};