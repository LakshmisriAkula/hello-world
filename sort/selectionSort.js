function selectionSort(arr,n){
    let i,j,min_ind;
    for(i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            min_ind = i;
            if(arr[j]<arr[min_ind]){
                min_ind=j;
            }

            swap(arr,min_ind,i)
        }
    }
    return arr;
}

function swap(arr,min_ind,ind){
    [arr[min_ind],arr[ind]] = [arr[ind],arr[min_ind]]
}

var arr1 = [64, 25, 12, 22, 11];

console.log(selectionSort(arr1,arr1.length))