// write js code here corresponding to matches.html
var x=JSON.parse(localStorage.getItem("schedule"));

var favlist=JSON.parse(localStorage.getItem("favourites"))||[];
x.map(function(ele){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=ele.match;
    var td2=document.createElement("td");
    td2.innerText=ele.teamA;

    var td3=document.createElement("td");
    td3.innerText=ele.teamB;

    var td4=document.createElement("td");
    td4.innerText=ele.date;

    var td5=document.createElement("td");
    td5.innerText=ele.venue;

    var td6=document.createElement("td");

    td6.innerText="Add To Favourite";
    td6.style.cursor="pointer";
    td6.style.color="red"
    td6.addEventListener("click",function(){
        markfun(ele);
    })
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

})
function markfun(ele)
{
    favlist.push(ele);
    
    localStorage.setItem("favourites",JSON.stringify(favlist));
    console.log(favlist)
}