

const animChar = (num)=>{
const arrAnim = []

for (let i =0;i<8;i++){
    arrAnim[i] = './sko'+(i+1)+'.jpg'
}
    return arrAnim[num]    
}


export default animChar