var trap = function (height) {
    if(!height) return 0;
    if (height.length < 3) {
      return 0;
    }
    let waterVolume = 0;
    let max_h=0;
    let max_index=0;
    
    for(let i=0; i<height.length;i++){
        if(height[i]>max_h) {
            max_h = height[i];
            max_index=i;
        }
    }

    for(let i=1; i<max_index;i++){
        if(height[i-1]>height[i]){
            waterVolume += height[i-1]-height[i];
            height[i]=height[i-1];
        }
    }

    for (let i=height.length-2; i>max_index;i--){
        if(height[i+1]>height[i]){
            waterVolume += height[i+1]-height[i];
            height[i]=height[i+1];
        }
    }
  
    return waterVolume;
  };

  const height=[0,1,0,2,1,0,1,3,2,1,2,1];

  console.log(trap(height));