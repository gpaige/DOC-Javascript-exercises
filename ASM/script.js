$(document).ready(function(){
  $("h1").click(function(){

    var url ="http://http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=ef4d9d0c30372a4d1252dc4689deead8e9629a8b"
    $.getJSON(url)
    .done(function(response){
      console.log(response)
    })
  })
})
