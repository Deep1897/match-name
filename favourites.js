// write js code here corresponding to favourites.html
var fa=JSON.parse(localStorage.getItem("favourites"))
console.log(fa);

fa.map(function(ele){
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

    td6.innerText="remove as Favourite";
    td6.style.cursor="pointer";
    td6.style.color="red"
    td6.addEventListener("click",function(ele){
       event.target.parentNode.remove(ele);
    })
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

})
function removefun(ele){
    // var tr=document.createElement("tr");

    // var td1=document.createElement("td");
    // td1.innerText=""
    // var td2=document.createElement("td");
    // td2.innerText="";

    // var td3=document.createElement("td");
    // td3.innerText="";

    // var td4=document.createElement("td");
    // td4.innerText="";

    // var td5=document.createElement("td");
    // td5.innerText="";

    // var td6=document.createElement("td");

    // td6.innerText="";
    // tr.append(td1,td2,td3,td4,td5,td6);
    // document.querySelector("tbody").append(tr);
    event.target.parentNode.remove();
}