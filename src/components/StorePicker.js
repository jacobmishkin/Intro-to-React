import React from 'react';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		//first grab text from the box
		const storeId = this.storeInput.value;
		//second we're going to transition from / to /store /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`)
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;