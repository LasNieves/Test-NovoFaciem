import React from 'react';
import CenteredWithBottomBorder from './CenteredWithBottomBorder';
import HeaderCentered from './HeaderCentered';
import Seo from './Seo';
import SimpleCentered2 from './SimpleCentered2';
import { usePwaAlreadyInstalled } from '../hooks/usePwaAlreadyInstalled';

const Layout = ({ children, title, description, banner }) => {
	const { pwaInstall } = usePwaAlreadyInstalled();

	return (
		<>
			<Seo title={title} description={description} />
			{banner, !pwaInstall && <HeaderCentered/>}
			<CenteredWithBottomBorder />
			<main>{children}</main>
			<SimpleCentered2 />
		</>
	);
};

export default Layout;
