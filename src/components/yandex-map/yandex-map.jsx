import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import pinIcon from '../../images/pin.svg';

const LocationOption = {
  CENTER_LOCATION: [59.968137, 30.316272],
  MARKER_LOCATION: [59.968700, 30.312315],
  ZOOM: 15,
  WIDTH: '100%',
  HEIGHT: '100%',
};

const PlacemarkOption = {
  iconLayout: 'default#image',
  iconImageHref: pinIcon,
  iconImageSize: [34, 42],
};

function YandexMap() {

  return (
    <YMaps>
      <Map width={LocationOption.WIDTH} height={LocationOption.HEIGHT} defaultState={{ center: LocationOption.CENTER_LOCATION, zoom: LocationOption.ZOOM }}>
        <Placemark geometry={LocationOption.MARKER_LOCATION} options={PlacemarkOption} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;
