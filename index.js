// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun);
var matchData=JSON.parse(localStorage.getItem("schedule"))||[];
function myfun(){
    event.preventDefault();
    obj={
      match: document.querySelector("#matchNum").value,
      teamA: document.querySelector("#teamA").value,
      teamB: document.querySelector("#teamB").value, 
      date: document.querySelector("#date").value,
      venue: document.querySelector("#venue").value,

    }
    matchData.push(obj);
    localStorage.setItem("schedule",JSON.stringify(matchData))
    localStorage.remove("schedule");
}