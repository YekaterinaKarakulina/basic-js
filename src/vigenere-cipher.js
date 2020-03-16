let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {

    
    encrypt(message, key) {
        if(typeof(message)=='string' && typeof(key)=='string') {
            console.log('do');
        } else {
            throw 'Error';
        }
    }

    decrypt(message, key) {
        if(typeof(message)=='string' && typeof(key)=='string') {
            console.log('do');

        } else {
            throw 'Error';
        }
    }
}

module.exports = VigenereCipheringMachine;
