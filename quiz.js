let displayQuestion = document.querySelector('.question');
let answersBox = document.querySelector('.answers-box');
let quizBox = document.querySelector('.box');


function check() {
     var c=0;
     var q1=document.quiz.question1.value;
     var q2=document.quiz.question2.value;
     var q3=document.quiz.question3.value;
     var q4=document.quiz.question4.value;
     var q5=document.quiz.question5.value;
     var q6=document.quiz.question6.value;
     var q7=document.quiz.question7.value;
     var q8=document.quiz.question8.value;
     var q9=document.quiz.question9.value;
     var q10=document.quiz.question10.value;
     var result=document.getElementById('result');
     var quiz=document.getElementById("quiz");
    
     if (q1=="All the answers are true"){c++}
     if (q2=="Web Page"){c++}
     if (q3==".html"){c++}
     if (q4=="HTML"){c++}
     if (q5=="float"){c++}
     if (q6=="No, it’s not possible"){c++}
     if (q7=="z-index"){c++}
     if (q8=="Yes it’s possible"){c++}
     if (q9=="H1"){c++}
     if (q10=="border-color,style"){c++}
     quiz.style.display="none";

     if(c<=3){
result.textcontent=`your result is ${c}. 
It is not so good please try to work on yourself.`
}else{
 result.textcontent=`your result is ${c}. It is awesome.`
     
}
}