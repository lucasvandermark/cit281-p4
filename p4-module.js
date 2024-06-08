const { data } = require("./p4-data");

//Runs through every item in the array, with x being each array item and x.question being the question associated with each array item
function getQuestions() {
 return data.map(x => x.question);
}
//console.log(getQuestions());

function getAnswers() {
    return data.map(x => x.answer);
   }
//console.log(getAnswers());

//Referenced code from https://dev.to/devcer/cloning-an-array-of-objects-in-javascript-3nng
function getQuestionsAnswers() {
    dataClone = [...data];
    return dataClone;
}
// Testing getQuestionsAnswers();
/*console.log(getQuestionsAnswers());
if (data === dataClone) {
    console.log("Array did not clone correctly")
} else {
    console.log("Array is not a mutable copy and cloned correctly")
} */

function getQuestion(number = "") {
    const questionNumber = parseInt(number);

    let desiredQ = {
        error: '',
        question: '',
        number: questionNumber,
    }

    if (questionNumber <= 0) {
        desiredQ.error = "Question number must be >= 1";
        desiredQ.number = '';    
    } else if (questionNumber > data.length) {
        desiredQ.error = `Question number must be less than the number of questions (${data.length})`;
        desiredQ.number = '';
    } else if ((isNaN(questionNumber) || questionNumber === '')) {
        desiredQ.error = "Question number must be an integer";
        desiredQ.number = '';
    } else {
    for (const x of data) {
        let qNumber = parseInt(x.question.charAt(1));
        if (qNumber == questionNumber) {
            desiredQ.question = x.question;
    }}}

/*     if (desiredQ.number > data.length) {
        desiredQ.error = "An error occured while trying to obtain that question";
    }; */

    return desiredQ;
};
//console.log(getQuestion(number = "2"));

function getAnswer(number = "") {
    const answerNumber = parseInt(number);

    let desiredA = {
        error: '',
        answer: '',
        number: answerNumber,
    };

    if (answerNumber <= 0) {
        desiredA.error = "Question number must be >= 1";
        desiredA.number = '';    
    } else if (answerNumber > data.length) {
        desiredA.error = `Question number must be less than the number of questions (${data.length})`;
        desiredA.number = '';   
    } else if ((isNaN(answerNumber) || answerNumber === '')) {
        desiredA.error = "Question number must be an integer";
        desiredA.number = '';   
    } else {
    for (const x of data) {
        let aNumber = parseInt(x.answer.charAt(1));
        if (aNumber == answerNumber) {
            desiredA.answer = x.answer;
    }}}

    return desiredA;
};
//console.log(getAnswer(2));

function getQuestionAnswer(number = '') {
    const num = parseInt(number)

    let desiredQA = {
        error: '',
        question: '',
        answer: '',
        number: num,
    }

    if (num <= 0) {
        desiredQA.error = "Question number must be >= 1";
        desiredQA.number = '';   
    } else if ( num > data.length) {
        desiredQA.error = `Question number must be less than the number of questions (${data.length})`;
        desiredQA.number = '';
    } else if (isNaN(num) || num === '') {
        desiredQA.error = 'Question number must be an integer';
        desiredQA.number = '';
    } else {
    for (const x of data) {
        let qNumber = parseInt(x.question.charAt(1));
        if ( qNumber == num) {
            desiredQA.answer = x.answer;
            desiredQA.question = x.question;
    }}}

    return desiredQA;

}
// console.log(getQuestionAnswer(-2));
// console.log(getQuestionAnswer(2));
// console.log(getQuestionAnswer());


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = true;
  const testGetA = true
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit


  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = { 
    getQuestions,
    getAnswers, 
    getQuestionsAnswers, 
    getQuestion, 
    getAnswer, 
    getQuestionAnswer
};