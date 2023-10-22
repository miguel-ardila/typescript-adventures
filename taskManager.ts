interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Task[] = [];

function addTask(title: string): void {
    const task: Task = {
        id: Date.now(),
        title,
        completed: false,
    };
    tasks.push(task);
    console.log(`Task added: ${title}`);
}

function completeTask(id: number): void {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task completed: ${task.title}`);
    } else {
        console.log(`Task not found with id: ${id}`);
    }
}

function listTasks(): void {
    tasks.forEach(task => {
        console.log(`${task.id}. ${task.title} [${task.completed ? 'Done' : 'Pending'}]`);
    });
}

// Command Line Args Handling
const [_, __, cmd, ...args] = process.argv;

switch (cmd) {
    case 'add':
        addTask(args[0]);
        break;
    case 'complete':
        completeTask(Number(args[0]));
        break;
    case 'list':
        listTasks();
        break;
    default:
        console.log(`Unknown command: ${cmd}`);
}
