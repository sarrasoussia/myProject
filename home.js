$(document).ready(function() {


    setInterval(
        function () {
            var H= "eco-friendly technology";
            var W="green tech";
            var T =document.getElementById("faza");
            if (T.innerHTML ==H) { T.innerHTML =W}
            else { T.innerHTML =H} 
        }, 2000);


    });