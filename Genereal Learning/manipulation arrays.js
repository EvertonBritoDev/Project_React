const tasks = [
    {descricao: 'Passear com o cachorro',prioridade: '1',status:'concluida' },
    {descricao: 'Comprar ingredientes para o almoço',prioridade: '1',status:'concluida' },
    {descricao: 'ir para a academia',prioridade: '2',status:'pendente' },
    {descricao: 'Resolver exercicios',prioridade: '1',status:'concluida' },
];

tasks.push({descricao:'Treinar Violão',prioridade:'pendente',status:'Concluida'});

const pendingTasks = tasks.filter(({status}) => status === 'concluida');

/*console.log(pendingTasks);*/

const doneTasks = tasks.map((tasks) => ({...tasks, status:'concluida'}));

/*console.log(doneTasks);*/

const sortTasks = tasks.sort((prevTask,currentTask) => prevTask.prioridade - currentTask.prioridade);

/*console.log(sortTasks);*/

const pendingTaskQTD = tasks.reduce((prev,next) =>
{
    if(next.status === 'concluida') return prev + 1
    return prev
},0);

/*console.log(pendingTaskQTD);*/

const selectedTasks = tasks.find((tasks) => tasks.descricao === 'Resolver exercicios');

/*console.log(selectedTasks);*/

const someTasks = tasks.some((tasks) => tasks.status === 'concluida');
console.log(someTasks);


const everyTaks = tasks.every((tasks) => tasks.status === 'concluida');
console.log(everyTaks);

