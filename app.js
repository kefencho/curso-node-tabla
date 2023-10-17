const {crearArchivo}=require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

// const [,,arg3='base5']=process.argv;
// const[,base=5]=arg3.split('=');
// console.log(base);
//  fs.writeFile(`tabla-${numero}.txt`,salida,(err)=>{
//     if(err) throw err;
//     console.log(`Tabla-${numero}.txt creado`);
//  })

// const base=6;
// crearArchivo(base)
//     .then(nombreArchivo=>console.log(nombreArchivo))
//     .catch(err=>console.log(err));

crearArchivo(argv.b,argv.l,argv.h)
     .then(nombreArchivo=>console.log(nombreArchivo))
     .catch(err=>console.log(err));