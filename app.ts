const num1Element = document.getElementById('num1') as HTMLInputElement;//Telling typescript that what we select here is of type input element so we can access value property from that input element.
const num2Element = document.getElementById('num2') as HTMLInputElement;
const but = document.querySelector('button')!;//Telling typescript that this button exists and is not null/undefined to avoid but?.addEventListner.
const numResult: Array<number> = [];
const stringResult: string[] = [];
type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

function add(num1: NumOrString, num2: NumOrString) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resobj: Result) {
    console.log(resobj.val);
}

but.addEventListener('click', () => {
    const n1 = num1Element.value;
    const n2 = num2Element.value;
    const res = add(+n1, +n2); //HTMLInputElement.value returns a string value and we are converting it into number as add func accepts nuber as parameters.
    const stringres = add(n1, n2);
    numResult.push(res as number);
    console.log(res);
    stringResult.push(stringres as string);
    console.log(stringres);
    printResult({ val: res as number, timestamp: new Date() });
    console.log(stringResult, numResult);
})
/* 

but?.addEventListener('click', () => {
    const n1 = num1Element.value;
    const n2 = num2Element.value;
    const res = add(+n1, +n2); //HTMLInputElement.value returns a string value and we are converting it into number as add func accepts nuber as parameters.
    console.log(res);
})  */


const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This worked!!');
    }, 1000);
});

myPromise.then((res) => {
    console.log(res.split(''));
})
