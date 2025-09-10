import chalk from "chalk"

function fibsRec(a){
    if ( a == 1 ){
        return [0]
    } else if(!isNaN(Number(a)) && a > 0){
        
        let newNum = fibsRec(a - 1);
        if(newNum.length === 1){
            newNum.push(newNum.at(-1) + 1)
        } else {
            newNum.push(newNum.at(-1) + newNum.at(-2))
        }
        return newNum
    } else { 
        console.error(chalk.red("you did not enter a number or it is less than 0:", a))
    }
}

export {
    fibsRec,
}