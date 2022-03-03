// ==UserScript==
// @name           Steam社区市场价格历史记录附加按钮
// @name:en        Add extra buttons to the Steam Community Market item details page.
// @version        0.0.2
// @description    Steam饰品详情页看历史记录是增加额外的筛选按钮（原有按钮为：周、月、总览）
// @description:en Add extra buttons to the Steam Community Market item details page when check history prices.
// @author         孤尘枫
// @homepageURL    https://greasyfork.org/users/198749
// @icon           https://store.steampowered.com/favicon.ico
// @match          https://steamcommunity.com/market/listings/*
// @grant          none
// @supportURL     https://steamcommunity.com/id/WildHao/
// @namespace https://greasyfork.org/users/198749
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var ele1 = document.getElementById("BG_bottom");
    if (ele1) {
        var ele2 = document.getElementById("pricehistory");
        if (ele2) {
            var ele2tmp = ele2.nextElementSibling;// 这是那个换行的br标签
            if (ele2tmp) {
                var targetEle = ele2tmp.nextElementSibling;// 这是“周 月 总览”标签(终于在这里获取到了)，在这要新增附加按钮“近2个月”、“近3个月”
                if (targetEle) {
                    //debugger;
                    var baseChild = targetEle.lastElementChild;
                    var child1 = '    放大图表    ' +
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 7 );" href="javascript:void(0)">周</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 14 );" href="javascript:void(0)">近半月</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 30 );" href="javascript:void(0)">月</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 60 );" href="javascript:void(0)">近2月</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 90 );" href="javascript:void(0)">近3月</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 180 );" href="javascript:void(0)">近6月</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomDays( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest, 365 );" href="javascript:void(0)">近1年</a>'+
                        '<a class="zoomopt" onclick="return pricehistory_zoomLifetime( g_plotPriceHistory, g_timePriceHistoryEarliest, g_timePriceHistoryLatest );" href="javascript:void(0)" style="padding-right: 0">总览</a>';
                    targetEle.innerHTML = child1;
                }
            }
        } else {
            console.debug("没有这个ID 'pricehistory'");
        }
    }
})();
