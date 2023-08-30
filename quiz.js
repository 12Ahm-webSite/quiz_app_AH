const quizData =[
    {
        question:"ما هو أسم المبرمج؟",
        a:"أدهم",
        b:"أسامة ",
        c:"أحمد",
        d:"سالم",
        correct:"c",
    },
    {
        question:"كم عمره؟",
        a:"18",
        b:"19",
        c:"21",
        d:"22",
        correct:"c",
    },
    {
        question:"ما هي لغة البرمجة المفضلة للمبرمج؟؟",
        a:"C++",
        b:"C#",
        c:"JAVA",
        d:"Ruby",
        correct:"b",
    },
    {
        question:"ماهي حالته الإجتماعية؟",
        a:"أعزب",
        b:"مرتبط",
        c:"خاطب",
        d:"متزوج",
        correct:"a",
    },
    
];
const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score =0

loadQuiz()
function loadQuiz(){

    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEls.checked=false)

}
function getSelected(){
    let answer
    answerEls.forEach(answerEls=>{
        if(answerEls.checked){
            answer=answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer=getSelected()
    if(answer){
        if (answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2> you answerwd ${score}/${quizData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})