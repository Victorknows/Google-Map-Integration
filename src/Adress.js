import React from 'react'; 
import { AddressAutofill } from '@mapbox/search-js-react';

const Address = () => {
    return (
        <form>
            <AddressAutofill accessToken="2pk.eyJ1Ijoibm9ubmllLWdhdGhvbmkiLCJhIjoiY2xvbzlwNXYxMzNqeDJscndxbmI2eTkzMCJ9.BbIACXxO5Dye7k4gZLgz-g">
                <input
                    name="address" placeholder="Address" type="text"
                    autoComplete="address-line1"
                />
            </AddressAutofill>
            <input
                name="apartment" placeholder="Apartment number" type="text"
                autoComplete="address-line2"
            />
            <input
                name="city" placeholder="City" type="text"
                autoComplete="address-level2"
            />
            <input
                name="state" placeholder="State" type="text"
                autoComplete="address-level1"
            />
            <input
                name="country" placeholder="Country" type="text"
                autoComplete="country"
            />
            <input
                name="postcode" placeholder="Postcode" type="text"
                autoComplete="postal-code"
            />
        </form>
    );
};

export default Address;