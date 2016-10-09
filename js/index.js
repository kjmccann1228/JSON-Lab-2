
console.log("HEEEEY");
var result = document.getElementById("result");

var request = new XMLHttpRequest();
request.responseType = "json";
var words = ""; // = "WockaWocka";

request.open('GET', "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD", true);
request.send();
request.onreadystatechange = function(){

  console.log("we are here");
  if((request.status==200) && (request.readyState==4))
  {
    var dataSet = request.response.data;
    for(var i = 0 ; i < dataSet.length ; i++)
    {
      if(dataSet[i][10] != null && dataSet[i][10].toUpperCase() == "GOLDEN GATE BRIDGE")
      {
        words += dataSet[i][8] + " (" + dataSet[i][9] +"): " + dataSet[i][12] + "<br />";
      }
    }
    console.log(request.response.data);
    result.innerHTML = words;
  }
}
