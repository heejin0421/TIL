import React, { useEffect } from 'react';
import { data } from './data';

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    //현재 위치 위치지정
    const nowData = { address: '신정로 225-12' };

    // 지도를 생성합니다.
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    // 확대 축소 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // // 마커 이미지 설정
    // const imageSrc =
    //     // 마커이미지의 주소입니다
    //     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    //   // 마커이미지의 크기입니다
    //   imageSize = new kakao.maps.Size(64, 69),
    //   // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    //   imageOption = { offset: new kakao.maps.Point(27, 69) };

    // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    // const markerImage = new kakao.maps.MarkerImage(
    //   imageSrc,
    //   imageSize,
    //   imageOption
    // );

    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();

    // 모든 마커의 배열
    const totalMarkers = [];

    // DB의 모임 데이터주소로 좌표를 검색합니다.
    data.forEach((el) => {
      geocoder.addressSearch(el.address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coord = new kakao.maps.LatLng(result[0].y, result[0].x);
          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coord,
            // image: markerImage,
          });
          // 모든 마커 저장소로 마커를 각각 추가해줍니다.
          totalMarkers.push(marker);

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
          kakao.maps.event.addListener(marker, 'click', function () {
            const content =
              `<div>` +
              `<div style="width:200px;text-align:center;">` +
              `<span>배프명: </span>` +
              el.roomTitle +
              `</div>` +
              `<div>` +
              `<span>위치: </span>` +
              el.address +
              `</div>` +
              `<div>` +
              `<span>남은시간: </span>` +
              el.epiredTime +
              `</div>` +
              `</div>`;
            if (infowindow.getMap()) {
              infowindow.close();
            } else {
              infowindow.open(map, marker);
              infowindow.setContent(content);
            }
          });
        }
      });
    });

    // 현재위치에 대한 검색어를 좌표로 변환
    geocoder.addressSearch(nowData.address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log('현재위치', coords);
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);

        // 원의 영역을 설정
        const circle = new kakao.maps.Circle({
          map: map,
          center: coords,
          radius: 1000, // m단위
          strokeWeight: 0,
          strokeColor: '',
          strokeOpacity: 0.8,
          strokeStyle: 'dashed',
          fillColor: '#00EEEE',
          fillOpacity: 0.2,
        });

        const center = circle.getPosition();
        const radius = circle.getRadius();
        const line = new kakao.maps.Polyline();

        // 마커의 위치와 원의 중심을 경로로 하는 폴리라인 설정
        totalMarkers.forEach(function (marker) {
          var path = [marker.n, center];
          line.setPath(path);

          // // 현재위치와 마커 사이의 거리 색깔지정
          // const drawLine = new kakao.maps.Polyline({
          //   map: map, // 선을 표시할 지도입니다
          //   path: path,
          //   strokeWeight: 3, // 선의 두께입니다
          //   strokeColor: '#db4040', // 선의 색깔입니다
          //   strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
          //   strokeStyle: 'solid', // 선의 스타일입니다
          // });

          // 현재위치와 마커 사이의 거리 측정
          const dist = line.getLength();

          // 이 거리가 원의 반지름보다 작거나 같다면
          if (dist < radius) {
            // 해당 marker는 원 안에 있는 것
            marker.setMap(map);
          } else {
            marker.setMap(null);
          }
        });
      }
    });
  }, []);

  return (
    <>
      <div
        id='map'
        style={{
          width: '500px',
          height: '500px',
        }}
      ></div>
    </>
  );
};

export default MapContainer;
