// 格式化日期
export const formatDate = function (date, flag) {
    if (date instanceof Date) {
        // 获取当前年月
        var y = new Date().getFullYear();
        var m = new Date().getMonth() + 1;
        // 获取传参年月
        var y2 = date.getFullYear();
        var m2 = date.getMonth() + 1;
        // 计算秒数差值
        let differTime = date.getTime() - new Date();
        // 计算天数差值
        let differDay = date.getDate() - new Date().getDate();
        let date_hours = parseInt(Math.abs(differTime / 60 / 60 / 1000));
        let date_minutes = parseInt(Math.abs(differTime / 60 / 1000));
        let date_seconds = parseInt(Math.abs(differTime / 1000));
        let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        if (flag) {
            if (y == y2 && m == m2) {
                if (differDay == 0) return '今天' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
                if (differDay == 1) return '明天' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
                else if (differDay == 2) return '后天' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
                else if (differDay > 2) return weeks[date.getDay()] + (date.getMonth() + 1) + '月' + date.getDate() + '日'
            }
            else return weeks[date.getDay()] + (date.getMonth() + 1) + '月' + date.getDate() + '日'
        }
        if (!flag && differDay <= 0) {
            if (differDay == 0) {
                if (date_hours > 0) {
                    return date_hours + '小时前'
                } else {
                    if (date_minutes > 0) {
                        return date_minutes + '分钟前'
                    } else {
                        return '刚刚'
                    }
                }
            } else {
                return (date.getMonth() + 1 > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate())
            }
        }
    } else {
        return ''
    }
}