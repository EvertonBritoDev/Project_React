

let promessaDeBusca = async() => new Promise((resolve, reject) => {
    console.log('Starting process');
    setTimeout(() => {
        let sucesso = true
        if (sucesso) {
            resolve('Pedido confirmado');            
        }
        else {
            reject('Ocorreu um erro');
        }
    },2000)
})
try{
    const data = await promessaDeBusca();
    console.log(data);

}catch(e){
    console.log(e);
    
}


