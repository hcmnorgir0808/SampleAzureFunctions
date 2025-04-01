import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

async function goodbye(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    console.log(request.method)
    const name = request.query.get('name') || await request.text() || 'world';

    console.log('Goodbye requested');
    return { body: `Goodbye, ${name}!` };
};

app.http('goodbye', {
    methods: ['GET', 'POST', 'PUT'],
    authLevel: 'anonymous',
    handler: goodbye
});
