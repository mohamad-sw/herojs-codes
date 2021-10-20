document.querySelector("nav").addEventListener("click", (e)=>{
    // if user clicks on nav
    if(e.target.nodeName != "I") return
    let data;
    switch (e.target.getAttributeNode("item-id").value) {
        case "home":
            data = {title:"HOME",color:"red",itemId : "home"}
            update(data)
            history.pushState(data , "home", "/home")
            break;
        case "search":
            data = {title:"SEARCH",color:"blue",itemId : "search"}
            update(data)
            history.pushState(data , "search", "search")
            break;
        case "likes":
            data = {title:"LIKES",color:"yellow",itemId : "likes"}
            update(data)
            history.pushState(data , "likes", "likes")
            break;
        default:
            data = {title:"PROFILE",color:"pink",itemId : "profile"}
            update(data)
            history.pushState(data , "profile", "profile")
    }
})

window.addEventListener("popstate",e=>{
    if(history.state){
        update(history.state)
    }else{
        update({title:"HOME",color:"red",itemId : "home"})
    }
})

function update(data){
    document.querySelector("h1").innerText = data.title;
    document.querySelector("main").style.backgroundColor = data.color;
    document.querySelectorAll("i").forEach(element=>{
        element.style.color = "#666"
    })
    document.querySelector(`i[item-id=${data.itemId}]`).style.color = "black"
}