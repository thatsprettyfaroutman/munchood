import API_CONFIG from 'api.config';
import {xhttp as Ajax} from 'xhttp';

class SheetApi {

	constructor() {
		this._cache = {};
	}


	// Public methods
	// ------------------------------------

	get(template) {
		if ( !template ) {
			throw new Error('sheet-api.js: Template must be set');
		}

		if ( !API_CONFIG[template] ) {
			throw new Error('sheet-api.js: Template must be set in API_CONFIG (api.config.js). Like dis : { template: "url_to_spreadsheet"}');
		}

		if ( this._cache[template] ) {
			return this._cache[template];
		}

		this._cache[template] = new Promise((resolve, reject) => {
			Ajax(
				{ url : API_CONFIG[template] },
				(res) => {
					resolve(this._cleanUpSheetData(res));
				},
				(err) => {
					reject(err);
				}
			);
		});

		return this._cache[template];
	}




	// Private methods
	// ------------------------------------

	_cleanUpSheetData(data) {
		let cells = data.feed.entry;
		let fieldRe = /(|, )field--(\w|-){1,}: /gi;

		return cells.map((item, i) => {
			let row = {};
			let itemRawData = item.content.$t;

			// First cell is title apparently.
			row['title'] = item.title.$t;

			let fields = itemRawData.match(fieldRe).map((item) => {
				let name = item.split('field--');
				name = name[1].split(':');
				name = this._convertToCamel(name[0]);

				return {
					delimiter : item,
					name : name
				};
			});

			let itemData = itemRawData.split(new RegExp(fields.map((item) => {
				return item.delimiter;
			}).join('|')));

			itemData.shift();

			fields.forEach((field, i) => {
				row[field.name] = itemData[i];
			});

			return row;
		});
	}

	_convertToCamel(str) {
		return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	}

}

export default new SheetApi();
