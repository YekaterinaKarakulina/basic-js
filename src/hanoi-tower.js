module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var hanoi = new Object();
    var turns = (2**disksNumber)-1;
    var seconds = turns/(turnsSpeed/3600);
    hanoi.turns = turns;
    hanoi.seconds = seconds;
    return hanoi;
}