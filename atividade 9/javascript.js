const demoId = document.getElementById("demo");
demoId.style.border = '2px solid red';

const catClass = document.getElementsByClassName("categoria");
for (i = 0; i < catClass.length; i++) {
    catClass[i].style.border = '2px dotted orange';
}

const tag = document.getElementsByTagName("article");
for (i = 0; i < tag.length; i++) {
    tag[i].style.border = '2px dotted blue';
    const demoQuery = document.querySelector("article");
    demoQuery.style.border = '2px dashed green';
    
}