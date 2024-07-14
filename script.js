
const apply=document.querySelector('#button');
const list= document.querySelector('#list-items');

// const todoapp= document.querySelector('#todoapp');

apply.addEventListener('click', (e)=>{
    e.preventDefault();
    let input= document.querySelector('#input');
    const element= document.createElement('li');
    if(input.value==="")  alert('enter something');
    else{
        
        element.innerHTML= input.value;
        list.appendChild(element);
        let span= document.createElement('span');
        span.innerHTML="\u00d7" 
        element.appendChild(span);
        
    }
    input.value=""
    save()
    
})
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("done");
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        save();
    }
    
},false)

function save(){
    localStorage.setItem("data",list.innerHTML);
}
function show(){
    list.innerHTML=localStorage.getItem("data");
}
show();
