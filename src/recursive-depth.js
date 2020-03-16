
var arrDepth = 1;
var currentDepth = 0;
module.exports = class DepthCalculator {
    
    calculateDepth(arr) {
        
        console.log('depth', arrDepth, 'type', typeof(arr), ' array = ', arr);
       
        if(typeof(arr)=='object')
        {
            currentDepth++;
            


            
            for(var i=0; i< arr.length; i++) {
                if(typeof(arr[i])=='object')
                {

                    if(currentDepth>arrDepth)
                {
                    arrDepth = currentDepth;
                }
                    this.calculateDepth(arr[i]);
                    
                }
            }
           
        }
        return arrDepth;
     
};
}