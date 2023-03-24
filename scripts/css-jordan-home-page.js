window.onload = async function(){
    await getSurvays();
    var survayContainer = document.getElementById("survay-container");
    var survayItem = document.getElementById("survay-item");
    
    for(var i = 0; i < survays.length; i++ ){
       var survay = survays[i];

       var newItem =  survayItem.cloneNode(true);
       newItem.firstChild.setAttribute("href","./survay-questions.html?" + i);
       newItem.firstChild.innerHTML = survay.name;
       survayContainer.appendChild(newItem);
    }

    survayItem.remove();
}