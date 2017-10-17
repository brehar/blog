import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		return (
			<div className="form-group">
				<label htmlFor={field.id}>{field.label}</label>
				<input
					id={field.id}
					className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					label="Post Title"
					id="title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Tags"
					id="tags"
					name="tags"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					id="content"
					name="content"
					component={this.renderField}
				/>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);
