let original = document.getElementById("original-link");
let generate = document.getElementById("generate");
let shorten = document.getElementById("shorten-link");
let copy = document.getElementById("copy");
generate.addEventListener('click',()=>{
    var url =original.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp)=>resp.json())
    .then((value)=>{
     shorten.value=value.result.short_link;
    }).catch((error)=>{
        shorten.value="Something Went Wrong"
    })
});
copy.addEventListener('click',()=>{
navigator.clipboard.writeText(shorten.value);
copy.innerHTML="Copied";
setTimeout(()=>{
  copy.innerHTML="Copy";
},1000);
});