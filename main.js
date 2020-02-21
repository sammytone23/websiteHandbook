let source = "PageData.json"
let pageData = "";
$.getJSON("PageData.json",function(json){
    console.log(json.pages.pages.home.id);
});
(function() {
  $.getJSON(source)
    .done(function( data ) {
        pageData=data
        console.log(pageData)
    });
})();
// let current = "";
// current="home";
// data.pages.pages.forEach(page =>{
//     alert(page);
// });
      // $.each( data.items, function( i, item ) {
      //   $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
      //   if ( i === 3 ) {
      //     return false;
      //   }
      // });