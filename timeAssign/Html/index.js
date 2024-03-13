let li = document.getElementsByClassName("li");
// console.log(li);

fetch('data.json')
.then((e)=>{
  return e.json();
})
.then(function(data){
    for(let i=0;i<6;i++){
        let k=data[i].title
        li[i].textContent=k
    }
});