
var survays = [];
function getSurvays(){
    return fetch("http://localhost:1337/api/survays?populate=*").then(async (res) => {
        const survaysData = await res.json();
        for(var survay of survaysData.data){
            survays.push({
                name : survay.attributes.Name,
                questions : survay.attributes.Questions
            })
        }
        

    })
}