// function MyFunction(){
//     var x= document.getElementById("myinput");
//     var y= document.getElementById("hide");
//     var z= document.getElementById("hide1");



//     if(myinput.type==='pasword'){
//         myinput.type="text";
//         y.style.display="block";
//         z.style.display="none";
//     }
// else{
//         x.type='pasword'
//         y.style.display="none "
//         z.style.display="block"
//     }
// }

const pasword=document.getElementById("myinput");
const yeni=document.getElementById("nil");
function showhide(){
    if(pasword.type==='password'){
        pasword.setAttribute('type','text');
        yeni.classList.add('hide')
    }
    else{
        pasword.setAttribute('type','password')
        yeni.classList.remove('hide')
    }
}