import React, { PropTypes } from 'react';

const TextArea = (props) => {

	return (
		<div className="TextArea">
			<div className="Input">
				<textarea maxLength="300" onChange={props.onChange} id={props.id} placeholder={props.placeholder} name={props.name} value={props.value} />
			</div>
			<div>
				{props.errors && <p className="InputError">{props.errors[props.name]}</p>}
			</div>
		</div>

	)
};

export default TextArea;