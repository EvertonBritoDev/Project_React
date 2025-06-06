/*console.log('first');
setTimeout(() =>{
    console.log('seg');
    
},5000)
console.log('third');
*/

/*
let promise = new Promise((resolve, reject) => {
    console.log('Estou indo');
    setTimeout(() => {
        let sucesso = true;
        if(sucesso){
            resolve(('Resposta da promise'));
        }else{
            reject('Deu ruim');
        }
        
    }, 5000);
    
});

console.log('continuando ');

promise
   .then((mensagem) => console.log(mensagem))
   .catch((err) => console.log(err));
*/

let verifyUser = new Promise((resolve, reject) => {
    console.log('validando user');
    setTimeout(() => {
        let sucesso = true;
        if(sucesso){
            resolve({username:'everton',following: [{user: 1},{user: 2}]});
        }else{
            reject('Deu ruim');
        }
        
    }, 2000);
    
});

let loadPhotos = (quemeusigo) => new Promise((resolve, reject) => {
    console.log('Iniciando busca');
    setTimeout(() => {
        let sucesso = true;
        if(sucesso){
            resolve({foto:'src1',following: [{user: 1},{user: 2}]});
        }else{
            reject('Deu ruim ao carregar as fotos');
        }
        
    }, 2000);
    
});

verifyUser
    .then((quemeusigo) => {
        console.log(quemeusigo);
        
        return loadPhotos(quemeusigo)
    })
    .then((respostadafotos) => {
        console.log(respostadafotos); 
    })
    .catch  ((err) => {
        console.log(err);
        
    });

    