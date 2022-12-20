import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: ['Full Stack Software Engineer', 'Game Modder', 'Translator'],
				autoStart: true,
				loop: true,
				deleteSpeed: 100,
			}}
		/>
	);
}

export default Type;
