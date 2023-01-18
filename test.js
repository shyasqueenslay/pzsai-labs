const DENSITY = 2

const startX = 26;

const drawBarCode = () => {
    const canvas = document.getElementById("canvas");
    const numberStr = '836541'

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // start
    ctx.fillRect(20, 20, DENSITY, 100); // 22
    // 24
    ctx.fillRect(24, 20, DENSITY, 100); // 26 


    drawBody(numberStr, ctx)

    // end
    // 112
    ctx.fillRect(112, 20, DENSITY, 100); // 114
    // 116
    ctx.fillRect(116, 20, DENSITY, 100); // 118
    // 120
    ctx.fillRect(120, 20, DENSITY, 100); // 122
  }
}

const drawBody = (numberStr, ctx) => {

    let x = startX;

    for (const digit of numberStr) {
        const digitN =  Number(digit);
        const isDEven = digitN % 2 === 0

        const sequence = isDEven ? evenBarCodeMap[digitN] : oddBarCodeMap[digitN];
        sequence.forEach((step, index) => {
            if (index % 2 !== 0) {
                ctx.fillRect(x, 20, DENSITY * step, 80); // 26
            }
            x += step * DENSITY ;  
        })
    }
    console.log(x)
}

const evenBarCodeMap = {
    '0': [1, 1, 2, 3],
    '1': [1, 2, 2, 2],
    '2': [2, 2, 1, 2],
    '3': [1, 1, 4, 1],
    '4': [2, 3, 1, 1],
    '5': [1, 3, 2, 1],
    '6': [4, 1, 1, 1],
    '7': [2, 1, 3, 1],
    '8': [3, 1, 2, 1],
    '9': [2, 1, 1, 3]
} 

const oddBarCodeMap = {
    '0': [3, 2, 1, 1],
    '1': [2, 2, 2, 1],
    '2': [2, 1, 2, 2],
    '3': [1, 4, 1, 1],
    '4': [1, 1, 3, 2],
    '5': [1, 2, 3, 1],
    '6': [1, 1, 1, 4],
    '7': [1, 3, 1, 2],
    '8': [1, 2, 1, 3],
    '9': [3, 1, 1, 2]
} 