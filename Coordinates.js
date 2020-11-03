

const Ottawa = {
    "latitude": 45.32250,
    "longitude": -75.66722
};

class Coordinates {

    constructor(origin, destination){
        this.longitude = 0;
        this.latitude = 0;
        this.altitude = 0;
        this.maxAltitude = 0;

        switch(origin){
            case "toronto":
                this._torontoDeparture();
                break;
            case "vancouver":
                this._vancouverDeparture();
                break;
            case "montreal":
                this._montrealDeparture();
                break;
            case "halifax":
                this._halifaxDeparture();
                break;
            case "quebec":
                this._quebecDeparture();
                break;

        }
    }

    _pulse = () => {

        // Increase the altitude of the flight until it reaches the maximum altitude for the specific flight.
        if(this.altitude !== this.maxAltitude){
            this.altitude += 250;
        }

        // Converge the longitude coordinates towards Ottawa.
        if(this.longitude !== Ottawa.longitude){
            if(this.longitude < Ottawa.longitude){
                this.longitude += 0.100;
            } else {
                this.longitude -= 0.100;
            }
        }
        
        // Converge the latitude coordinates towards Ottawa.
        if(this.latitude !== Ottawa.latitude){
            if(this.latitude < Ottawa.latitude){
                this.latitude += 1.100;
            } else {
                this.latitude -= 1.100;
            }
        }
        
    }

    _torontoDeparture = () => {
        this.latitude = 43.6532;
        this.longitude = -79.3832;
        this.maxAltitude = 31000;
    }

    _vancouverDeparture = () => {
        this.latitude = 49.2827;
        this.longitude = -123.1207;
        this.maxAltitude = 35000;
    }

    _montrealDeparture = () => {
        this.latitude = 45.5017;
        this.longitude = -73.5673;
        this.maxAltitude = 28000;
    }

    _halifaxDeparture = () => {
        this.latitude = 44.6488;
        this.longitude = -63.5752;
        this.maxAltitude = 34000;
    }

    _quebecDeparture = () => {
        this.latitude = 46.8139;
        this.longitude = -71.2080;
        this.maxAltitude = 32000;
    }

}

module.exports = Coordinates;