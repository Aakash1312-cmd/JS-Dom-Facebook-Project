//Add friend Feature with same button

var istatus = document.querySelector("h5")

var fr = document.querySelector("#add")
 

var flag = 0

fr.addEventListener("click",function(){
    if(flag == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color ="green"
    fr.innerHTML = "Remove"
    fr.style.backgroundColor = "black"
    flag = 1

    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color ="red"
        fr.innerHTML = "Add Friend"
        fr.style.backgroundColor = "cadetblue"
        flag = 0
    }
})