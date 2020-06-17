import React, { useState, useEffect } from 'react';
import { ModalSection } from '../assets/css/Section.style';
import { IconMd } from '../assets/css/Image.style';

const Loading = (props) => {
	const [show, setShow] = useState(props.show);

	useEffect(() => {
		setShow(props.show);
	}, [props.show]);
	return (
		<>
			{show ? (
				<ModalSection>
					<IconMd
						alt="만다라트-로딩"
						src={require('../assets/img/icon/loading.svg')}
					/>
				</ModalSection>
			) : null}
		</>
	);
};

export default Loading;
