import * as React from 'react';
import tag from './index.module.scss';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <span className={tag.tag}>{children}</span>;
};

export default Tag;
