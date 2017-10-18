import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index';

class PostsNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label htmlFor={field.id}>{field.label}</label>
				<input
					id={field.id}
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">{touched ? error : ''}</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Post Title"
					id="title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					id="categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					id="content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<Link to="/" className="btn btn-danger">
					Cancel
				</Link>
			</form>
		);
	}
}

function validate(values) {
	let errors = {};

	if (!values.title) {
		errors.title = 'Please enter a title.';
	}

	if (!values.categories) {
		errors.categories = 'Please enter at least one category.';
	}

	if (!values.content) {
		errors.content = 'Please enter some content.';
	}

	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
