// localStorage.setItem("ism","johongir");
// localStorage.setItem("familiya","shavkatov");
// localStorage.setItem("yosh","14");
// localStorage.setItem("wdwc","qwdqdqd");

//  const a=localStorage.getItem("ism")
//  console.log(ism)

//  localStorage.removeItem("ism")

//  localStorage.clear()

//   localStorage.setItem("id","12345")
//   localStorage.setItem("password","54321")
   
// const a=localStorage.getItem("id")
// console.log("id");
// const b=localStorage.getItem("password")
// console.log("password");
const inp=document.getElementById("ism-input");
const btnnp=document.getElementById("btn");
const h12=document.getElementById("h12");


h12.textContent=localStorage.ism;



btnnp.addEventListener("click",()=>{
                         if(inp.value.trim().length>0){
                                                  localStorage.setItem("ism",inp.value);
                                                  h12.textContent=localStorage.ism;
                         }else{
                                                  alert("Ism yooozing")
                         }
})