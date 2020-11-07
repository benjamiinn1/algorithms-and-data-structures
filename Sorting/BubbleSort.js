// loops through swapping lower with higher
// places largest number at end then loops through and does it again

function swapOld(arr, ind1, ind2){
    let temp = arr[ind1]
    arr[ind1] = arr[ind2]
    arr[ind2] = temp
    return arr

}


// THIS IS NOT OPTIMIZED
function BubbleSort(arr){
    for(i = arr.length; i > 0; i-- ){
        for(j = 0; j < i -1; j++){
            if (arr[j] > arr[j + 1]) arr = swapOld(arr, j, j + 1)
        }
    }
    return arr

}

function OptimizedBubbleSort(arr){
    let noSwaps;
    for(i = arr.length; i > 0; i-- ){
        noSwaps = true
        for(j = 0; j < i -1; j++){
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                arr = swapOld(arr, j, j + 1)
                noSwaps = false;
            }
        }
        if(noSwaps) break
    }
    return arr

}

// console.log(swap([4,1,3], 0,1))
console.log(OptimizedBubbleSort([5,1,3,6,8,9]))