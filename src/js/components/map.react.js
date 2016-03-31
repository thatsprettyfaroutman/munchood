import React    from 'react';
import Uid      from 'utils/uid';
import SheetApi from 'services/sheet-api';

export default class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uid : Uid.get()
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {

    // Gotta mount google maps this way, pretty uggo ¯\_(ツ)_/¯
    let script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?sensor=false";
    script.async = true;
    script.onload = () => {
      let renderedMap = document.createElement('div');
      renderedMap.style.height = '100%';
      let gmap = new google.maps.Map(renderedMap, this.props);
      document.getElementById(this.state.uid).appendChild(renderedMap);

      // Get data from google sheets
      SheetApi.get('maps').then(data => {
        if ( this.props.row > -1 && this.props.row < data.length ) {
          let lat = parseFloat( data[this.props.row].latitude );
          let lng = parseFloat( data[this.props.row].longitude );
          let center = new google.maps.LatLng( lat, lng );
          let mapCenter = null;

          let mapPin = {
            url: ( this._svgIsSupported() ? 'images/map-pin.svg' : 'images/map-pin.png' ),
            scaledSize : new google.maps.Size(241 / 2, 291 / 2),
          };

          let marker = new google.maps.Marker({
            position : center,
            map : gmap,
            icon : mapPin
          });

          //
          // let projection = gmap.getProjection();
          // let pixelPoint = projection.fromLatLngToPoint(center);
          // pixelPoint.y = pixelPoint.y - (291 / 4);
          // console.log(pixelPoint);
          // mapCenter = projection.fromPointToLatLng(pixelPoint);

          // gmap.panTo( center );
          gmap.setCenter( mapCenter || center );

        }
      });

    }
    document.body.appendChild(script);

  }

  render() {
    return (
      <div id={ this.state.uid } className="map"></div>
    );
  }

  _svgIsSupported() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0")
  }
}

Map.defaultProps = {
  row : 0,
  zoom : 17,
  scrollwheel : false,
  navigationControl : false,
  mapTypeControl : false,
  scaleControl : false,
  zoomControl : false,
  streetViewControl : false,
  styles : [
    {"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}
  ]
};
