$(document).ready(function(){
    $.ajax({
    url: "http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=882a1552&app_key=b185899a46ebb1a08d2a0a527059846a",
    type: "GET",
    success: function (parsedResponse, statusText, jqXhr) {

        console.log(parsedResponse);

    },
    error: function (error) {

        console.log(error);
    }  
}).then(function(data){
    $('.weather').append(data.wx_desc);
    $('.temperature').append(data.temp_c);
    $('.humidity').append(data.humid_pct);
    $('.windspeed').append(data.windspd_ms);
});
});