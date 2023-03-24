window.onload = async function(){
    await getSurvays();
    var survayId  =  parseInt(window.location.search.trim().replace("?",""));


    var survayContainer = document.getElementById("survey-container");
    var questionItem = document.getElementById("question-item");
    
    var selectedSurvey = survays[survayId];

    for(var i = 0; i < selectedSurvey.questions.length; i++ ){
        var question = selectedSurvey.questions[i];

        var newItem =  questionItem.cloneNode(true);
        newItem.children[0].innerHTML = "Question " + (i + 1);

        newItem.children[1].innerHTML = question.text;

        newItem.children[2].children[0].children[0].innerHTML = question.a;
        newItem.children[2].children[1].children[0].innerHTML = question.b;
        newItem.children[2].children[2].children[0].innerHTML = question.c;
        newItem.children[2].children[3].children[0].innerHTML = question.d;
        
        survayContainer.appendChild(newItem);
     }

     questionItem.remove();
}