function bubbleSort(arr,n){
    for(i=0;i<n-1;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
       return arr
}

var data = [8, 5, 7, 3, 2];
console.log(bubbleSort(data,data.length));