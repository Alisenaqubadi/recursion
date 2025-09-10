function mergeSort(a){
    let leftHalf = [];
    let rightHalf = [];
    let newLeftHalf = [];
    let NewRightHalf = [];
    let answer = [];

    if( a.length == 1 )
        {return a} 

    leftHalf = a.slice(0, Math.floor(a.length / 2))
    rightHalf = a.slice(Math.floor(a.length /2))
    newLeftHalf = mergeSort(leftHalf);
    NewRightHalf = mergeSort(rightHalf);


    while(newLeftHalf.length || NewRightHalf.length){
        if(NewRightHalf[0] < newLeftHalf[0]){
            answer.push(NewRightHalf.shift())
        } else { 
            answer.push(newLeftHalf.shift())
         }
    }

    return answer.concat(newLeftHalf).concat(NewRightHalf);

}

export {
    mergeSort,
}