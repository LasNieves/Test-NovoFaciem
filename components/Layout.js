import React from 'react';
import CenteredWithBottomBorder from './CenteredWithBottomBorder';
import HeaderCentered from './HeaderCentered';
import Seo from './Seo';
import SimpleCentered2 from './SimpleCentered2';

const Layout = ({ children, title, description, banner }) => {
	
	return (
		<>
			<Seo title={title} description={description} />
			{banner && <HeaderCentered/>}
			<CenteredWithBottomBorder />
			<main>{children}</main>
			<SimpleCentered2 />
		</>
	);
};

export default Layout;
