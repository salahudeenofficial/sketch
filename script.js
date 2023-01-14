const cont = document.querySelector('.cont')
const root = document.documentElement
const btn = document.querySelector('.btn')
let m = 0;
function reloadCss()
{
var links = document.getElementsByTagName("link");
for (var cl in links)
{
    var link = links[cl];
    if (link.rel === "stylesheet")
        link.href += "";
}
}


fn = function()  {
    let x = prompt("enter grid size");
    removeAllChildNodes(cont)
    grider(x)
 
 }
 let blink = function(e) {
    box = e.currentTarget
    
    box.classList.add('hover')
  }
function fillBox(box) {
    box.classList.remove("unfilled");
    box.classList.add("filled");
  }
 function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
grider = function(x) {
    console.log("pp")
    root.style.setProperty('--size', 500/x+'px')
    root.style.setProperty('--grid-rows', x);
    root.style.setProperty('--grid-cols', x);

    for(let i =0;i <= x*x;i++) {
        grd = document.createElement("div")
        
        
       
        //grd.style.border = '1px solid rgb(8, 8, 8)'
        grd.classList.add('grd')
        
        grd.addEventListener('mouseover',(e) => blink(e))
        cont.appendChild(grd)

     
    /*let box = document.createElement("div");
    box.classList.add("box", "unfilled");
    box.addEventListener("mouseover", (e) => fillBox(e.currentTarget));
    cont.appendChild(box);
       
        */
      
      

    }
   

} 
btn.addEventListener('click',fn)
