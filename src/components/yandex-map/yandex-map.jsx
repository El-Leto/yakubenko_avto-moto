import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import pinIcon from '../../images/pin.svg';

const LocationOptions = {
  CENTER_LOCATION: [59.968137, 30.316272],
  MARKER_LOCATION: [59.968700, 30.312315],
  ZOOM: 15,
  WIDTH: '100%',
  HEIGHT: '100%',
};

const PlacemarkOptions = {
  iconLayout: 'default#image',
  iconImageHref: pinIcon,
  iconImageSize: [34, 42],
};

function YandexMap() {

  return (
    <YMaps>
      <Map width={LocationOptions.WIDTH} height={LocationOptions.HEIGHT} defaultState={{ center: LocationOptions.CENTER_LOCATION, zoom: LocationOptions.ZOOM }}>
        <Placemark geometry={LocationOptions.MARKER_LOCATION} options={PlacemarkOptions} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;
