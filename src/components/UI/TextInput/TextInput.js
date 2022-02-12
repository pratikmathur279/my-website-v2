import React, { PropTypes } from 'react';

const TextInput = (props) => {
	return (
		<div classes="TextInput">
			<div className="Input">
				<input onChange={props.onChange} id={props.id} type="text" name={props.name} value={props.value} placeholder={props.placeholder} />
			</div>
			<div>
				{props.errors && <p className="InputError">{props.errors[props.name]}</p>}
			</div>
		</div>
	)
};

export default TextInput;