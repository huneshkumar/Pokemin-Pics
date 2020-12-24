
 const baseUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
 const de=document.querySelector('#dec')
 const btn=document.querySelector("#cl")
let c=1
let i=0


 function callImg(){
    const newImg=document.querySelector('img')
        newImg.src=`${baseUrl}${i}.png`   
}

btn.addEventListener('click',function(){ 
    for(i;i<=c;i++){
        callImg()  
    }
    c++
})




