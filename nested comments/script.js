let reply = document.querySelector(".reply");
let comment = document.querySelector(".comment");

let commentShow = false;

reply.addEventListener("click", () => {
    if(!commentShow){
        comment.style.display = "block"
        commentShow = true;
    }else{
        comment.style.display = "none"
        commentShow = false;
    }
})