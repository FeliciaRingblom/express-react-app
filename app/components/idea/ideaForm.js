import React from 'react';
import TextInput from '../common/textInput';

class IdeaForm extends React.Component {
	render() {
  return (
			<form>
				<TextInput
          name="header"
					label="heading"
					value={this.props.idea.header}
					onChange={this.props.onChange}
					error={this.props.errors.header} />

				<TextInput
          name="desc"
					label="description"
					value={this.props.idea.desc}
					onChange={this.props.onChange}
					error={this.props.errors.desc} />

        <TextInput
          name="location"
          label="location"
          value={this.props.idea.location}
          onChange={this.props.onChange}
          error={this.props.errors.location} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>

			</form>
		);
	}
}

IdeaForm.propTypes = {
  idea: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default IdeaForm;
