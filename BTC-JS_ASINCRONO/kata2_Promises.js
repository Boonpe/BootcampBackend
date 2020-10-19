const edad=15;
const promise = new Promise ((resolve, reject)=>{
    if(edad >=18){
        resolve ("eres mayor de 18");
    } else{
        reject ('eres menos de 18');
    }
})
promise.then(value =>{
    return value + 'puedes entrar'
})
.then(value=>{
    console.log(value);
})
.catch(error=> {
    console.log(error);
})
.finally(()=>{
    console.log('siempre entra');

})