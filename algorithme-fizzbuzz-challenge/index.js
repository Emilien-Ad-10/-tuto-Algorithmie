function fizzbuzz() {
    for (let i = 1; i <= 100; i++){
        let number;
        //Multiple de 3:
        if(i % 3 === 0) number = "Fizz"
        // Multiple de 5:
        if(i % 5 === 0) number = "Buzz"
        // Multiple de 3 et 5:
        if (i % 3 === 0 && i % 5 === 0) number = "FizzBuzz"
        // Si number a une valeur, log number, sinon log i: 
        console.log(number ? number : i);
    };
};

fizzbuzz();