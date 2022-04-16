function delayedResult(n1,n2,delayTime, callback){       
    setTimeout(() => {
        callback(n1+n2 + " (" + n1 + "+" + n2 + ")");
    }, delayTime);
}

delayedResult(6,9,3000, (result) => console.log(result));
