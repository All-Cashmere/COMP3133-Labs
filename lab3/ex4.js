const delayedMultiply = (num) => {
    setTimeout(() => {
        console.log('done!')
        return num * num;
    }, 500);
}

const delayedPromise = (num) => new Promise ((result, error) =>{
    setTimeout(() => {
        result(num * num);
        error();
    }, 500);
   
});

async function asyncPromise (num) {
    let promise=new Promise ((resolve, reject) =>{
    setTimeout(() => 
        resolve (num * num), 500);   
});
let result = await promise;
    return result;

}

delayedPromise(5)
.then(result => console.log(result))

//25

asyncPromise(6)
.then(result => console.log(result))

//36