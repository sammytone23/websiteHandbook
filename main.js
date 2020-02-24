let source = "PageData.json"
window.fetch('PageData.json').then((x)=>x.json()).then((pageData)=>{
    main(pageData)
});

main = function(data){
let current = "";
current="home";
data.pages.pages.forEach(page =>{
    alert(page);
});}