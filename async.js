function setTimeoutPromisified(miliSec) {
    return new Promise(resolve => setTimeout(resolve,miliSec))
}

(async()=>{
   await setTimeoutPromisified(1000)
   console.log('Hi') 
   await setTimeoutPromisified(3000)
   console.log('Hello') 
   await setTimeoutPromisified(5000)
   console.log('Hello There...') 
})()