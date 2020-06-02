import { Map, Placemark, YMaps } from 'react-yandex-maps';

import React from 'react';
import css from './Map.module.scss';

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
