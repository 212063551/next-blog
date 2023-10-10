const Times = new Date();
const getTs = (time: any) => {
	const arr = time.split(/[- :]/),
		date: any = new Date(
			arr[0],
			arr[1] - 1,
			arr[2],
			arr[3],
			arr[4],
			arr[5]
		),
		timeStr = Date.parse(date);
	return timeStr;
};
// 计算文章的距离发布日期有多久
export const calculationTime = (post_modified: any) => {
	// 拿到当前时间戳和发布时的时间戳，然后得出时间戳差
	const timeDiff = Times.getTime() - getTs(post_modified);
	const min = 60 * 1000;
	const hour = min * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = week * 4;
	const year = month * 12;
	// 计算发布时间距离当前时间的周、天、时、分
	const exceedyear = Math.floor(timeDiff / year);
	const exceedmonth = Math.floor(timeDiff / month);
	const exceedWeek = Math.floor(timeDiff / week);
	const exceedDay = Math.floor(timeDiff / day);
	const exceedHour = Math.floor(timeDiff / hour);
	// 最后判断时间差到底是属于哪个区间，然后return
	if (exceedyear < 100 && exceedyear > 0) {
		return exceedyear + ' 年前';
	} else {
		if (exceedmonth < 12 && exceedmonth > 0) {
			return exceedmonth + ' 月前';
		} else {
			if (exceedWeek < 4 && exceedWeek > 0) {
				return exceedWeek + ' 星期前';
			} else {
				if (exceedDay < 7 && exceedDay > 0) {
					return exceedDay + ' 天前';
				} else {
					if (exceedHour < 24 && exceedHour > 0) {
						return exceedHour + '小时前';
					} else {
						return '刚刚';
					}
				}
			}
		}
	}
};
