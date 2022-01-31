/* global kakao */ 
import React, { useEffect } from 'react';
import styled from "styled-components";
import "../../assets/font/font.css";

const MountainMap = ({mid}) => {
  // const { kakao } = window;
  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
    border-bottom: 1px solid #ddd;
  `;

  const MapContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    #myMap {
      width: 100%;
      height: 300px;
    }
  `;

  const Adress = styled.div`
    width: 100%;
    padding-top: 35px;

    dl{
        width: 100%;
        display: flex;
        flex-direction: baseline;
        margin: 0;
    }

    dt{
        display: inline-block;
        width: 20%;
        margin: 0;
        font-weight: 600;
        font-size: 18px;
        font-family: "Pretendard";
      }

    dd {
        display: inline-block;
        width: 80%;
        margin: 0;
        font-weight: 200;
        font-size: 18px;
        font-family: "Pretendard";
        color: #666;
    }
  `;

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch('경남 함양군 마천면 추성리 산 100', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
  
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
  
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;color:#f44336;text-align:center;padding:6px 0;">장소에대한설명</div>'
        });
        infowindow.open(map, marker);
  
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    })
  }, []);

  return (
    <Wrapper>
      <MapContainer>
        <div id='myMap' />
      </MapContainer>
      <Adress>
        <dl>
          <dt>주소</dt>
          <dd>경남 함양군 마천면 추성리 산 100</dd>
        </dl>
      </Adress>
    </Wrapper>
  );
}

export default MountainMap;