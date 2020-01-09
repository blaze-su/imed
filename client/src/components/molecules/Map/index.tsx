import css from './index.scss';
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
    center: [45.054052, 38.929241],
    zoom: 15
};

const coordinates = [[45.053035, 38.943531]];

const Maps = () => (
    <YMaps>
        <Map onWheel={(e: Event): void => e.preventDefault()} defaultState={mapData} className={css.map}>
            {coordinates.map((coordinate: number[], index: number) => <Placemark key={index} geometry={coordinate} />)}
        </Map>
    </YMaps>
);

export default Maps;
