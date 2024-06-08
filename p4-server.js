const fastify = require("fastify")();
const {
    getQuestions,
    getAnswers, 
    getQuestionsAnswers, 
    getQuestion, 
    getAnswer, 
    getQuestionAnswer} = require("./p4-module");

fastify.get("/cit/question", (request, reply) => {
    const result = getQuestions();

    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                questions: []
    })} else {
        reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                questions: result,
            });
    }});

fastify.get("/cit/answer", (request, reply) => {
    const result = getAnswers();
    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                answers: [],
            })
    } else {
        reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                answers: result,

            })}
});

fastify.get("/cit/questionanswer", (request,reply) => {
    const result = getQuestionsAnswers()

    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                answers: []
    })} else {
        reply
            .code (200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                questions_answers: result
            })}
});

fastify.get("/cit/question/:number", (request, reply) => {
    const result = getQuestion(request.params.number);

    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                answers: [],
    })} else {
        reply
            .code (200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                question: result.question,
                number: result.number
            })}
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const result = getAnswer(request.params.number);

    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                answers: [],
    })} else {
        reply
            .code (200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                question: result.answer,
                number: result.number
            })}
})

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const result = getQuestionAnswer(request.params.number);

    if (result.error) {
        reply
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: result.error,
                statusCode: 500,
                answers: [],
    })} else {
        reply
            .code (200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({
                error: '',
                statusCode: 200,
                question: result.question,
                answer: result.answer,
                number: result.number
            })}
})
fastify.get("*", (request, reply) => {
    reply
        .code(404)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
            error: "Route not found",
            statusCode: 404,
        })
});

 // Start server and listen to requests using Fastify; Retrieved from class demonstration
 const listenIP = 'localhost';
 const listenPort = 8082;
 fastify.listen(listenPort, listenIP, (err, address) => {
 if (err) {
 // fastify.log.error(err);
 console.log(err);
 process.exit(1);
 }
 // fastify.log.info(`Server listening on ${address}`);
 console.log(`Server listening on ${address}`);
 });

