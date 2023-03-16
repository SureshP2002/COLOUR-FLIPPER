const button=document.getElementById('btn')
const color=document.getElementById('Color')
const wrap=document.getElementById('wrap')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',changeback)
function changeback(){
    let c="#"+randHexValue()+randHexValue()+randHexValue()+randHexValue()+randHexValue()+randHexValue()
    
    wrap.style.backgroundColor=c
   
    color.innerHTML=c
}
function randHexValue(){
    let indx=Math.floor(Math.random()*16)
    return hex[indx]
}