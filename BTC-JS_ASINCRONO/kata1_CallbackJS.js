const aInput = document.getElementById('a');
const bInput = document.getElementById('b');

const sumar=(a, b, cb) => {
    const result = a + b;
    cb(result);
}
const restar=(a, b, cb) => {
    const result = a - b;
    cb(result);
}
const multi=(a, b, cb) => {
    const result = a * b;
    cb(result);
}
const div=(a, b, cb) => {
    const result = a / b;
    cb(result);
}
const pintarResultado = result => {
    document.querySelector('.result').innerText = result;
}
document.querySelector('.sumarButton')
    .addEventListener('click', () => {
        const a =+aInput.value;
        const b =+bInput.value;
        sumar(a, b, pintarResultado)       
})
document.querySelector('.restarButton')
    .addEventListener('click',()=>{
        const a = +aInput.value;
        const b = +bInput.value;
        restar(a, b, pintarResultado)
})
document.querySelector('.multiButton')
    .addEventListener('click',()=>{
        const a = +aInput.value;
        const b = +bInput.value;
        multi(a, b, pintarResultado)
})
document.querySelector('.divButton')
    .addEventListener('click',()=>{
        const a = +aInput.value;
        const b = +bInput.value;
        div(a, b, pintarResultado)
})