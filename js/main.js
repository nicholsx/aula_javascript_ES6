/*var soma = function (a , b) {
    return a + b;
}

console.log(soma(5 , 5)); */


/*var log = function log(value) {
    console.log(value);
}

log('Test');*/

// ********Arrow functions*********

//(Especie de Flecha) - Funções anonimas, ou usando com atribuindo uma 
//variavel ou passando como parametro para outra função.

//var sum = function() {   Podemos omitir a palavra function no caso de Arrow function
//}

//var sum = (a, b) => "return ja esta implicito" a + b; Funções diretas não precisamos de {}, com condicionais sim.
//var sum = (a, b) => a + b;
//console.log(sum(5, 10));

/*var obj = {
    test: '123'
}*/

//var createObj = () => ({test: 123});
//console.log(createObj());

/*function car() {
    this.foo = 'bar'
}

console.log(new car());*/

/*log('teste');

function log(value) {
    console.log(value);
}*/ 

/*var obj = {
    showContext: function showContext() {
        //console.log(this);
        this.log('teste');

        setTimeout(function() {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext(); // Contexto de invocação*/

/*var obj = {
    showContext: function showContext() {

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext(); */

// Lazy evaluation

/*function randomNumber() {
    console.log('Generating a random number');
    return Math.random() * 10;
}

console.log(randomNumber());*/

//function multiply(a = , b = a)
/*function multiply(a , b = randomNumber()) {
    //b = b || 1;
    //b = typeof b === 'undefined' ? 1 : b;
    //if (typeof b === 'undefined') {
    //   b = 1;
    //}

    return a * b;
}
//console.log(multiply(5,0));
//console.log(multiply(5, undefined));
console.log(multiply(5));*/

//NaN not a number, quando acontece o console diz que não pode efetuar a operação


























