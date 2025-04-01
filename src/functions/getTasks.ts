import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { tasks } from "./tasks"; // タスクのメモリ管理用

export async function getTasks(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';
    return { 
        body: JSON.stringify(tasks) 
    };
};

app.http('getTasks', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getTasks
});
