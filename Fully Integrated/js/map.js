var map;
var mylat = {lat: 1.390722, lng: 103.821833}
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 1.390722, lng: 103.821833},
          zoom: 17
        
        
        });
      
        var marker = new google.maps.Marker({
          position: mylat,
          map: map,
          title: 'Dust bin'
        });
        

      }

