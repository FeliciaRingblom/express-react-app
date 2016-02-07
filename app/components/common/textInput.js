import React from 'react';

function getWrapperClass() {
  let wrapperClass = 'form-group';
  if (this.props.error && this.props.error.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }
  return wrapperClass;
}

class TextInput extends React.Component {
  render() {
    return (
			<div className={ getWrapperClass }>
				<label htmlFor={ this.props.name }>{ this.props.label }</label>
				<div className="field">
					<input type="text"
						name={ this.props.name }
						className="form-control"
						placeholder={ this.props.placeholder }
						ref={ this.props.name }
						value={ this.props.value }
						onChange={ this.props.onChange } />
					<div className="input">{ this.props.error }</div>
				</div>
			</div>
	);
  }
}

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  error: React.PropTypes.string
};

export default TextInput;
