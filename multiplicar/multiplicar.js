const fs = require('fs');

let base = 2;
let data = '';

let multiplica = (base) => {

    return new Promise((resolve, reject) =>{

        if (!Number(base))
            reject('No es un numero');

        let data = '';

        for (let i=1; i<= 10; i++){
            data +=`${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data , (err) => {
            if (err) reject(err);
            else 
                resolve (`tabla-${base}.txt`);
        });
    
    });  
} 

module.exports = {
    multiplica
}