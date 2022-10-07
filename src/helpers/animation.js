

const animChar = (num)=>{
const arrAnim = []

for (let i =0;i<8;i++){
    arrAnim[i] = './sko'+(i+1)+'.jpg'
}
    return arrAnim[num]    
}

const mateLvl = (num)=>{
    const arrAnim = []
    
    for (let i =0;i<6;i++){
        arrAnim[i] = './ho'+(i+1)+'.png'
    }
        return arrAnim[num]    
    }
export { animChar,mateLvl}