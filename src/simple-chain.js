var arr = [];
var str = '';
const chainMaker = {
  
  getLength() {
    return arr.length;
  },
  addLink(value) {
    str = '';
    arr.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if(typeof(position) == 'number') {
      if(position >0 && position <arr.length) {
        arr.splice(position-1, 1);
        return chainMaker;
      } else {
        arr = [];
        throw "Error on removing wrong link";
      }
    } else {
      arr = [];
      throw "Error on removing wrong link";
    }
  },
  reverseChain() {
    arr.reverse();
    return chainMaker;
  },
  finishChain() {
    for(var i=0; i<arr.length-1; i++)
    {
      str = str +'( '+arr[i]+' )'+'~~';
    }
    str = str + '( '+arr[arr.length-1]+' )';
    arr = [];
    return str;
  }
};
module.exports = chainMaker;