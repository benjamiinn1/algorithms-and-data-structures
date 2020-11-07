// Similar to bubble sort
// find the minimum, swap it with the first
// continue until sorted

function swapOld(arr, ind1, ind2){
    let temp = arr[ind1]
    arr[ind1] = arr[ind2]
    arr[ind2] = temp
    return arr

}

function SelectionSort(arr){
    let smallest;

    for(i = 0; i < arr.length; i++){
        smallest = i
        for(j = 0; j < arr.length - 1 ; j++){
            console.log(`i = ${i} j = ${j}`)
            if(arr[j+1] < arr[smallest]){
                smallest = j + 1
                console.log(smallest)
            }
        }
        
        swapOld(arr, smallest, i)
        console.log(arr, smallest, i)
        // console.log(arr)
    }
    return arr
}

console.log(SelectionSort([3,1,2,5,35,6,4,36,9]))