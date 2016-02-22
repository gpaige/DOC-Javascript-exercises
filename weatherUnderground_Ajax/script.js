$(document).ready(function(){
  $("h1").click(function(){
    var city = $(".city").val()
    var state = $(".state").val()
    var url ="http://api.wunderground.com/api/664a804c64999b52/conditions/q/"+ state +"/"+ city +".json"
    $.getJSON(url)
    .done(function(response){
      var body = $("body")
      renderForecast (respons, body)
      var gif = (response.current_observation.icon_url)
      var temp_f = (response.current_observation.temp_f)
      var feelsLike = (response.current_observation.feelslike_f)
      var forecast = (response.current_observation.forecast_url)

    $("body").append($("<img src='"+ gif +"'>"))
    $("body").append($("<div>The current temp is "+ temp_f +"</div>"))
    $("body").append($("<div>Feels like "+ feelsLike +"</div>"))
    $("body").append($("<html src='"+ forecast +"'>"))
    })
  })
})
funtion renderForecast(respone, parentElement){
    var container = $("<div class='forecast'></div>")
    var gif = (response.current_observation.icon_url)
    var temp_f = (response.current_observation.temp_f)
    var feelsLike = (response.current_observation.feelslike_f)
    var forecast = (response.current_observation.forecast_url)
    tempFDiv.text(temp_f)
}

    //console.log(city)
   //console.log(state)
  //console.log(url)
