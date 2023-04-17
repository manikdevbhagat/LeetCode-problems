var findMedianSortedArrays = function(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  var min = min(m,n);
  var arr = new Array(m+n);
  // var arr = [...nums1,...nums2];
  // arr.sort((a,b)=>a-b);
  // let length = arr.length;
  if(length%2===0){
    return (arr[length/2 - 1]+arr[length/2])/2;
  }else{
    return arr[(length-1)/2];
  }
  
};

nums1=[1,2,10];
nums2=[4,5,6,7];

console.log(findMedianSortedArrays(nums1,nums2));
