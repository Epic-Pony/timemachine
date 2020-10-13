/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-10-13 22:14:10
 * @LastEditors: Pony
 * @LastEditTime: 2020-10-13 23:21:08
 */

function disptime() {
    let dateType = 'AM';
    //1.组装需要的时间
    let now = new Date(); //现在的时间
    //2.获取时间
    let hours = now.getHours();
    let min = now.getMinutes();

    let mHours = document.querySelector('.hours-num'); //小时元素
    let mMins = document.querySelector('.min-num'); //分钟元素
    let type = document.querySelector('.type'); //分钟元素


    if(hours<=12) {
        dateType = "AM";
    } else {
        dateType = "PM";
        hours = hours -12;
    }
    mHours.innerHTML = hours;//显示小时
    mMins.innerHTML = min;//显示分钟
    type.innerHTML = dateType;//时间分区表

    let myTime = setTimeout("disptime()", 1000);
};
disptime();