//to move the side bar 
const mainHead = document.querySelector( '.main-head' );
const showcase = document.querySelector( '.showcase' );
const toggler = document.querySelector( '.toggler' );
toggler.addEventListener( 'click', function(){
    mainHead.classList.toggle( 'active' );
    showcase.classList.toggle( 'width' );
} )

//to create new notes
const notescontainer = document.querySelector('.notes-container')
const createbtn = document.querySelector('#btn')
let notes=document.querySelectorAll('.inputbox')

createbtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p")
    let img=document.createElement("img")
    // creates a p tag and sets the attibutes and class name 
    inputbox.className="input-box"
    inputbox.setAttribute("contenteditable","true")
    // appens the delete icon into the input-box
    img.src ="Assets/delete.png"
    notescontainer.appendChild(inputbox).appendChild(img)
    let note1=true
})
    function note(){
        if(note1===true)
        {
            notescontainer.insertAdjacentElement("afterend",inputbox,img)
        }

    }

//to delete note 
notescontainer.addEventListener("click", function(e){
    //if the target you click on has a tag name img then remove the parent element ie the whole p tag
    if (e.target.tagName ==="IMG")
{
    e.target.parentElement.remove();
}
})

//to-do list
const inputlist= document.getElementById("input-list")
const listconatiner= document.getElementById("list-conatiner")

function addtask(){
    if(inputlist.value === "")
    {
        alert("You havent added a task")
    }else{
        let li = document.createElement("li")
        li.className="list"
        li.innerHTML = inputlist.value
        listconatiner.appendChild(li)

        let img=document.createElement("img")
        img.src ="Assets/delete.png"
        li.appendChild(img);
    }
    inputlist.value=""
}

listconatiner.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
    }
})

//show and hide todolist
let todolist= document.querySelector(".list-box")
todolist.style.display="none"

let show=true
function showtodo(){
if(show){
    todolist.style.display="block"
    show=false
}else{
    todolist.style.display="none"
    show=true
}
} 