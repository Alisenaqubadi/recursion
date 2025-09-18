function mergeSort(array) {

    if (array.length <= 1) return array;


    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);


    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);


    const merged = [];
    let i = 0, j = 0;

    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedRight[j] < sortedLeft[i]) {
            merged.push(sortedRight[j]);
            j++;
        } else {
            merged.push(sortedLeft[i]);
            i++;
        }
    }

    return merged.concat(sortedLeft.slice(i)).concat(sortedRight.slice(j));
}

export {
    mergeSort,
}