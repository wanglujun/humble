function indexOf(arr,char,index){
    for(var i=index|| 0;i<arr.length;i++){
        if(arr[i]==char){
            return i;
        }
    }
    return -1;
}