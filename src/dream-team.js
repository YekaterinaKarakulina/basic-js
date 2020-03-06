module.exports = function createDreamTeam(members) {
  var dreamTeam = [];
  let regex = /^([a-z 0_A-Z]+)$/;
  if(members==null) {
    return false;
  } else if (typeof(members)=='object') {
    for(var i=0; i<members.length; i++) {
      if(typeof members[i]==='string')       {
        if(regex.test(members[i]))         {
          dreamTeam.push(members[i].trim().charAt(0));
        }
      }
    }
    dreamTeam = Array.from(dreamTeam).sort((a, b) => {
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });
    return dreamTeam.join('').toUpperCase();
  } else {
    return false;
  }
};