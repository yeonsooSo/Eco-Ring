import React from 'react'
import Margin from '../../../Margin';

const Progress_bar = ({progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: 360,
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 10,
		// border: '1px solid black'
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: '#00C4E2',
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 12,
		color: 'white',
		fontWeight: 900,
		fontSize: 18
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<Margin size={10} />
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
