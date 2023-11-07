import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from '@react-google-maps/api';

const MapWithPolyline = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
    >
        <Marker position={{ lat: props.pickup.lat, lng: props.pickup.lng }} />
        <Marker position={{ lat: props.destination.lat, lng: props.destination.lng }} />
        <Polyline
            path={[
                { lat: props.pickup.lat, lng: props.pickup.lng },
                { lat: props.destination.lat, lng: props.destination.lng }
            ]}
        />
    </GoogleMap>
));

export default MapWithPolyline;