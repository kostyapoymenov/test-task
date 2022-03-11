//выполните в консоле
function task2() {

    new Promise((res)=> {
        setTimeout(()=> {console.log(0)});
        res();
    })
        .then(()=> console.log(1))
        .then(()=>{throw 5})
        .then(()=>console.log(2))
        .catch((er)=>console.log(er))
        .then(()=>console.log(4))
        .finally(()=>console.log(6));

    return 7;
}

task2();


const array = [3,6,1,2,5,2,9,3];

function sortArray(arr){
    let doubleArray = [];

    let newArray = arr
        .sort((a,b) => a-b)
        .filter((item, index) => {
            if(arr.indexOf(item) !== index)
                doubleArray.push(item);
            else 
                return item
    });

    return [...newArray, ...doubleArray];
}

console.log(sortArray());

 

// Начинает выполняться промис. 
// Promise выполняется асинхронно, поэтому сразу выполнится return 7.
// Затем будет выполняться Promise. 
// В нем мы видим асинхронную функцию setTimeout без аргумента задежки, значит по умолчанию там стоит 0. 
// Но все равно он будет вызван после выполнения текущего кода. Насколько я помню, js вместо 0 подставляет там 4ms. 
// Далее промис успешно выполнится и в консоль будет выведено число 1.
// После этого сработает ошибка и вернет 5.
// Далее then c console.log(2) не будет выполнен и отработает блок кода catch((er)=>console.log(er)), где в консоль будет выведено число 5.
// Т.к. catch возвращает Promise, то следующий за ним then будет выполнен и в консоль выведется значение 4.
// finally выполняется как после catch, так и после then, поэтому дальше в консоль будет вывеведено число 6.
// После этого выполнится отложенный setTimeout и в консоль выведется число 0.

// 1
// 5
// 4
// 6
// 0