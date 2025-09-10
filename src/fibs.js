import chalk from "chalk";

function fibs(a){
    let fib = [0,1]
    if(a == 0){ return []}
    else if ( a == 1 ){
        return [0]
    }else if( a == 2){
        return [0,1]
    } else if (a > 0){
      for(let i = 0; i < a-2; i++){

        fib.push( fib.at(-2) + fib.at(-1))

      }
        return fib
    } else { 
        console.error(chalk.red("you did not enter a integer or it is less than 0:", a))
    }
}

export { 
    fibs,
}