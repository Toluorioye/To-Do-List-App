var value1 = document.querySelector(".input");
var plus = document.getElementById("add");
var container = document.querySelector(".cont");

class item{
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        var l1 = document.createElement('div');

        var input = document.createElement('input');
        input.type ='text';
        input.classList.add('inputplace');
        input.style.padding ="10px";
        input.style. width = "255px"; 
        input.style. color= "white";
        
        input.disabled = true;
        input.value=name;
        
        var remove = document.createElement('button');
        remove.classList.add('delete');
        remove.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        remove.addEventListener('click', ()=>this.remove(l1));

        container.appendChild(l1);

        l1.appendChild(input);

        l1.appendChild(remove);

    }
    remove(l1)
    {
        container.removeChild(l1);   
    }
}
plus.addEventListener("click" ,check);
window.addEventListener("keydown" ,(e) =>{
    if (e.which==13){
        alert("jeidje")
        check();
    }
    })

    function check() 
    {
        if (value1.value!=="")
        {
          new item(value1.value);
          value1.value ="";
        }
    }
   function removeAll()
    {
        document.querySelector(".cont").innerHTML ='';
    }

    







//     let work = document.createElement('div ');
//     work.innerHTML = input.value;
//     // work.classList.add('todolists');
    
//     maintodo.appendChild(work);



//     console.log(maintodo)

