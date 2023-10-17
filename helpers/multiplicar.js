const fs=require('fs');

const crearArchivo = async(base=5,l=true,hasta=10)=>{
    try {
        console.log('--------------------------');
        console.log('      TABLA DEL ',base);
        console.log('--------------------------');
    
        let salida='';
        for (let i = 1; i <= hasta; i++) {
         salida += `${base} X ${i}=${base * i}\n`;
        }
        if(l){
            console.log(salida);
        }
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return (`tabla-${base}.txt CREADO`);
    } catch (error) {
        throw error;
    }

}

module.exports={
    crearArchivo
}