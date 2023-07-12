var colors = require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'options',
        message: 'que quieres ahcer?',
        choices: [
            {
                value: '1',
                name: '1 crear tarea',
            },
            {
                value: '2',
                name: '2 listar tareas',
            },
            {
                value: '3',
                name: '3 borrar tarea',
            },
            {
                value: '0',
                name: '0 salir',
            }
        ]
    }
]

const menu = () => {

    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);
    console.log(`${'           First Application'.blue}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);

    inquirer.prompt(preguntas).then(({entry}) => {
        console.log(entry);
    })
}




module.exports = {
    menu
};
