function initialize() {

	var mapOptions = {
		zoom: 16, // 지도 zoom 크기
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};


	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	/*
	 var size_x = 60; // 마커 이미지의 가로 크기
	 var size_y = 60; // 마커 이미지의 세로 크기

	 // 마커로 사용할 이미지 주소

	 var image = new google.maps.MarkerImage( 'image/logo.png',
	 new google.maps.Size(size_x, size_y),
	 '',
	 '',
	 new google.maps.Size(size_x, size_y));
	 */

	var address = document.getElementById("search").value; // text입력 값 가져오기
	var marker = null;
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			marker = new google.maps.Marker({
				map: map,
				draggable: true,
				animation: google.maps.Animation.DROP,
				//icon: image, // 마커로 사용할 이미지(기본 마커 이미지 사용)
				title: '위치', // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
				position: results[0].geometry.location
			});
			//마커 Animation
			google.maps.event.addListener(marker, "click", function(){ if(marker.getAnimation()!= null)
			{marker.setAnimation(null); } else { marker.setAnimation(google.maps.Animation.BOUNCE);}});
			var content = address; // 말풍선 안에 들어갈 내용
			//마커 클릭시 말풍선
			var infowindow = new google.maps.InfoWindow({ content: content});
			google.maps.event.addListener(marker, "click", function() {infowindow.open(map,marker);});
		} else {

		}
	});

}
google.maps.event.addDomListener(window, 'load', initialize);