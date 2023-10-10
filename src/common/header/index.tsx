'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { Logo } from '@/assets/images';
import { Close, HamburgerButton, GithubOne, Platte } from '@icon-park/react';
import header from './index.module.scss';

const nav = [
	{ id: 1, title: '首页', link: '/' },
	{ id: 2, title: '作品', link: '/works' },
	{ id: 3, title: '创作', link: '/creative' },
	{ id: 4, title: '文章', link: '/technical' },
	{ id: 5, title: '算法', link: '/arithmetic' },
	{ id: 6, title: '刷题', link: '/exercises' },
	{ id: 7, title: '题库', link: '/questions' },
	{ id: 8, title: '面经', link: '/faces' },
	{ id: 9, title: '关于', link: '/about' },
];
const Header: React.FC = () => {
	const [mobile, setMobile] = React.useState<boolean>(false);
	const Router = useRouter();
	return (
		<>
			<header id={header.header}>
				<div className={header.header}>
					<div className={header.header_box}>
						<div className={header.header_nav}>
							<Image
								className={header.logo}
								src={Logo}
								alt="Logo加载失败！"
								width={40}
								height={40}
								onClick={() => {
									Router.push('/');
								}}
							/>
							<nav>
								{nav.map((item) => {
									return (
										<Link
											key={item.id}
											href={item.link}
											target={
												item.link === '/creative'
													? '_blank'
													: ''
											}
										>
											{item.title}
										</Link>
									);
								})}
							</nav>
						</div>
						<div className={header.header_operates}>
							<div className={header.github}>
								<a
									target="_blank"
									href="https://github.com/212063551"
								>
									<GithubOne
										theme="outline"
										size="20"
										fill="#000000"
									/>
								</a>
							</div>
							<div className={header.theme}>
								<Platte theme="outline" size="20" />
							</div>
							<div
								className={header.mobile}
								onClick={() => {
									setMobile(!mobile);
								}}
							>
								{mobile ? (
									<Close
										theme="filled"
										size="20"
										fill="#000000"
									/>
								) : (
									<HamburgerButton
										theme="outline"
										size="20"
										fill="#000000"
									/>
								)}
							</div>
						</div>
					</div>
				</div>
				<div
					className={classNames(header.content, {
						[header.content_show]: mobile,
					})}
				>
					{nav.map((item) => {
						return (
							<div
								key={item.id}
								onClick={() => {
									setMobile(false);
									Router.push(item.link);
								}}
							>
								{item.title}
							</div>
						);
					})}
				</div>
			</header>
		</>
	);
};

export default Header;
