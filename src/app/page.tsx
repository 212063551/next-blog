import * as React from 'react';
import home from '@/styles/home.module.scss';
import { ArticleList } from '@/components';

const HomePage: React.FC = () => {
	const data = [];
	for (let index = 0; index < 100; index++) {
		data.push({
			article_id: `0000${index}`,
			title: '文章01',
			intro: '晋升靠的是硬实力，以及10%的运气。 你想去吹牛也不是不行，就怕到时候下不来台。仅仅是 P6 升 P7 的答辩，上面坐着的都是P9级别的大佬和砖家。PPT 以真实、简朴为主，凡是在 PPT 上花费超过10小时的，我觉得都有耍流氓的嫌疑。这些内容应该是这段时间你所积累的工作成果。平时没事拿个小笔记记一下，关键时刻它能像宋江一样救你的命。【推荐你用语雀，真的很好用】有了 PPT，你得去讲出来吧。讲话作为一门艺术，对于我们理工科的同学还是有一定难度的，所以我建议你有空去参加下吐槽大会。没有条件？那就创造条件，公司里找几个段子手还不是轻而易举。相比之下，产品经理的优势比我们大多了',
			cover_picture:
				'https://www.bing.com/th?id=OHR.SoprisSunrise_JA-JP4661289505_1920x1080.webp&qlt=50',
			is_cover: true,
			is_enabled: true,
			copyright: false,
			reprint: '',
			content: '测试内容',
			tags: ['node', 'react', 'vue'],
			category: '前端',
			is_Delete: false,
			createdAt: '2023-10-10 03:29:50',
			updatedAt: '2023-10-10 03:29:50',
		});
	}

	return (
		<>
			<div className={home.home_list}>
				<ArticleList dataSource={data} />
			</div>
		</>
	);
};

export default HomePage;
