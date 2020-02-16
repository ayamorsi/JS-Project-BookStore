// document.getElementsByClassName("btn_btn").click();
textarea = document.getElementById('textarea');
var allcomments = JSON.parse(localStorage.getItem("newComment"));
var bookcommit = document.getElementById("commt");
var rating="";
function starmark(item)
{ 
  var count =item.id[0];
  rating=count;
  var subid =item.id.substring(1);
  for(var i=0; i<5;i++)
  {
      if(i<count)
      {
          document.getElementById((i+1)+subid).style.color="orangered";

      }
      else
      {
        document.getElementById((i+1)+subid).style.color="black";
 

      }
  }
}
function showRating()
{
    var textvalue = { val: textarea.value , selbook :JSON.parse(localStorage.getItem("selectedBook"))}
    if(textvalue.length == 0){
        alert('Please write a comment');
        return;
    }
    const newComment = localStorage.getItem('newComment') ? JSON.parse(localStorage.getItem('newComment')) : []; 
    newComment.push(textvalue);
    localStorage.setItem("newComment",JSON.stringify(newComment));
    document.location.reload();
}

 var booktitle=document.getElementById("title");
 var bookimg=document.getElementById("img");
 var bookdesc=document.getElementById("desc");
 var bookprice=document.getElementById("price");
 var bookauthor=document.getElementById("aa");

 var selectedbook =JSON.parse(localStorage.getItem("selectedBook"));
 var allBooks =JSON.parse(localStorage.getItem("booksData"));


 for(let i=0;i<allBooks.length;i++)
 {
  if(allBooks[i].id==selectedbook){    
    booktitle.textContent=allBooks[i].name;
    bookimg.src=allBooks[i].img;
    bookdesc.textContent=allBooks[i].desc;
    bookprice.textContent=allBooks[i].price;
    bookauthor.textContent=allBooks[i].author;
  }

 }

 for(let i=0; i<allcomments.length;i++){
   if(allcomments[i].selbook == selectedbook){
        bookcommit.innerHTML+=`<div class="commentclass"> ${allcomments[i].val} </div>`
   }
 }

var home = document.getElementById("home")
var todo = document.getElementById("todo")
var category = document.getElementById("category")
var about = document.getElementById("about")

function homePage(){
    location.href = "home.html";
}
function aboutPage(){
    location.href = "about.html";
}
function categoriesPage(){
    location.href = "category.html";
}
function todoPage(){
    location.href = "todo.html";
}


home.addEventListener("click",homePage)
todo.addEventListener("click",todoPage)
category.addEventListener("click",categoriesPage)
about.addEventListener("click",aboutPage)

