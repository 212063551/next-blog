import * as React from 'react';
import { Tag } from '@/components';
import articleList from './index.module.scss';
import { calculationTime } from '@/utils/utils';

export type dataSourceType = {
	article_id: string;
	title: string;
	intro: string;
	cover_picture: string;
	is_cover: boolean;
	copyright: boolean;
	content: string;
	createdAt: string;
	updatedAt: string;
	is_enabled: boolean;
	reprint: string;
	tags: any[];
	category: string;
	is_Delete: boolean;
};

type ArticleListProps = { dataSource: dataSourceType[] };

const ArticleList: React.FC<ArticleListProps> = ({ dataSource }) => {
	return (
		<>
			{dataSource.map((item, i: React.Key) => {
				return (
					<div className={articleList.list} key={i}>
						{item.is_cover ? (
							<div
								className={articleList.cover_picture}
								style={{
									backgroundImage: `url(${item.cover_picture})`,
								}}
							></div>
						) : (
							''
						)}
						<div className={articleList.info}>
							<p className={articleList.title}>{item.title}</p>
							<div className={articleList.content}>
								{item.intro}
							</div>
							<footer>
								<div>
									{item.tags.map((item, i) => {
										return <Tag key={i}>{item}</Tag>;
									})}
								</div>
								<span className={articleList.updatedAt}>
									{calculationTime(item.updatedAt)}
								</span>
							</footer>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default ArticleList;
