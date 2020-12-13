import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className='ui inverted segment' style={{ borderRadius: '0' }}>
			<div className='ui  inverted  menu'>
				<Link to='/' className='item'>
					Todo List
				</Link>
				<div className='right menu'>
					<Link to='/' className='item'>
						All Todos
					</Link>
					<GoogleAuth />
				</div>
			</div>
		</div>
	);
};

export default Header;
