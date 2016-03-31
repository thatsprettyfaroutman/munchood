import React from 'react';
import Uid   from 'utils/uid';

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
			let gmaps = this.state.gmaps;
			let renderedMap = document.createElement('div');
			renderedMap.style.height = '100%';
			let gmap = new google.maps.Map(renderedMap, this.props);
			document.getElementById(this.state.uid).appendChild(renderedMap);
		}
  	document.body.appendChild(script);

	}

	render() {
		return (
			<div id={ this.state.uid } className="map"></div>
		);
	}
}

Map.defaultProps = {
	center : {lat : 59.938043, lng : 30.337157},
	zoom : 15,
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
