
function superbowlWin(arr){
   let win = arr.find(isWin);
   if (win !== undefined){
       return win['year']
   }
   return undefined
}

function isWin(obj){
    return (obj.result === 'W')
}