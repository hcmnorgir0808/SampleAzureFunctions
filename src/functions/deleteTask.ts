import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { tasks } from "./tasks"; // タスクのメモリ管理用

export async function deleteTask(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const id = parseInt(request.params.id);
    
    const index = tasks.findIndex(t => t.id === id);
    
    tasks.splice(index, 1);

    return { 
        body: JSON.stringify(tasks) 
    };
};

app.http('deleteTask', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: deleteTask
});


