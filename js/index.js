
// 首页

window.onscroll = function () {
    var sort = document.querySelector('.business .sort')
    var union = document.querySelector('.business .union')
    // var contentList = document.querySelector('.business .contentList')
    var contentListone = document.querySelector('.business .contentList').offsetTop
    var sortone = document.querySelector('.business .sort').offsetTop // 元素距离浏览器顶部的距离
    var b = document.documentElement.scrollTop; // 滚动的距离
    var result = sortone - b
    var resultOne = contentListone - b
    // console.log(resultOne)
    if (result <= 208) {
        sort.style.position = 'fixed'
        sort.style.top = '1rem'
        union.style.position = 'fixed'
        union.style.top = '1.5rem'
        union.style.left = '0'
        union.style.padding = '0 0.1rem'
    }
    if (resultOne > 100) {
        sort.style.position = ''
        sort.style.top = ''
        union.style.position = ''
        union.style.top = ''
                union.style.left = '0'
        union.style.padding = '0 0'
    }
}


// 筛选
function sx() {
    zsort()

    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = ''
    sore.style.color = ''
    sx.style.color = '#06c'
    sortt.style.color = ''

    // 阻止body滚动 
    document.addEventListener('touchmove', function (event){
        event.preventDefault();
    })
    // 取消阻止body滚动 结束

    document.body.style.height = '100%'
    document.body.style.overflow = 'hidden'

    // 阻止点击穿透
    var startx,starty,endx,endy
    document.addEventListener('touchstart',function (e) {

        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    },false)

    document.addEventListener('touchend',function (e) {
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
    },false)

    var sort = document.querySelector('.business .sort')
    var screen = document.querySelector('.business .screen')
    
    sort.style.position = 'fixed'
    sort.style.top = '1rem'
    screen.style.display = 'block'
    
    window.onscroll = function () {
        var contentListone = document.querySelector('.business .contentList').offsetTop
        var b = document.documentElement.scrollTop;
        var result = contentListone - b
        // console.log(result)

        if (result < 160) {
            sort.style.position = 'fixed'
            sort.style.top = '1rem'
        }
    }


}

// 点击完成隐藏筛选框
function btnn() {

    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = ''
    sore.style.color = ''
    sx.style.color = ''
    sortt.style.color = ''

    // 取消阻止body滚动  
    document.removeEventListener('touchmove', function (event) {
        event.preventDefault();
    })
    document.body.style.height = ''
    document.body.style.overflow = ''
    // 取消阻止body滚动 结束

    // console.log('隐藏')
    var screen = document.querySelector('.business .screen')

    var sort = document.querySelector('.business .sort')
    var union = document.querySelector('.business .union')

    var b = document.documentElement.scrollTop;
    var sortone = document.querySelector('.business .sort').offsetTop
    var result = sortone - b

    if (result <= 208) {
        sort.style.position = 'fixed'
        sort.style.top = '1rem'
        union.style.position = 'fixed'
        union.style.top = '1.5rem'
    }

    var contentListone = document.querySelector('.business .contentList').offsetTop
    var resultOne = contentListone - b
    if (resultOne > 100) {
        sort.style.position = ''
        sort.style.top = ''
        union.style.position = ''
        union.style.top = ''
    }

    window.onscroll = function () {
        var sort = document.querySelector('.business .sort')
        var union = document.querySelector('.business .union')

        var b = document.documentElement.scrollTop;
        var sortone = document.querySelector('.business .sort').offsetTop
        var result = sortone - b

        if (result <= 208) {
            sort.style.position = 'fixed'
            sort.style.top = '1rem'
            union.style.position = 'fixed'
            union.style.top = '1.5rem'
        }

        var contentListone = document.querySelector('.business .contentList').offsetTop
        var resultOne = contentListone - b
        if (resultOne > 100) {
            sort.style.position = ''
            sort.style.top = ''
            union.style.position = ''
            union.style.top = ''
        }
    }
    screen.style.display = 'none'
}

// 点击综合排序框 显示
function sort() {

    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = ''
    sore.style.color = ''
    sx.style.color = ''
    sortt.style.color = '#06c'

    // 取消阻止body滚动  
    document.removeEventListener('touchmove', function (event) {
        event.preventDefault();
    })
    document.body.style.height = '100%'
    document.body.style.overflow = 'hidden'

    // 阻止点击穿透
    var startx,starty,endx,endy
    document.addEventListener('touchstart',function (e) {

        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    },false)

    document.addEventListener('touchend',function (e) {
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
    },false)

    var sort = document.querySelector('.business .sort')
    var zsort = document.querySelector('.business .zsort')
    
    sort.style.position = 'fixed'
    sort.style.top = '1rem'
    zsort.style.display = 'block'
    
    window.onscroll = function () {
        var contentListone = document.querySelector('.business .contentList').offsetTop
        var b = document.documentElement.scrollTop;
        var result = contentListone - b
        // console.log(result)

        if (result < 160) {
            sort.style.position = 'fixed'
            sort.style.top = '1rem'
        }
    }
}


// 点击 隐藏综合排序框 
function zsort(n) {

    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = ''
    sore.style.color = ''
    sx.style.color = ''
    sortt.style.color = ''

    console.log(n)
    // 取消阻止body滚动  
    document.removeEventListener('touchmove', function (event) {
        event.preventDefault();
    })
    document.body.style.height = ''
    document.body.style.overflow = ''
    // 取消阻止body滚动 结束

    var zsort = document.querySelector('.business .zsort')
    var sort = document.querySelector('.business .sort')
    var union = document.querySelector('.business .union')

    var b = document.documentElement.scrollTop;
    var sortone = document.querySelector('.business .sort').offsetTop
    var result = sortone - b

    if (result <= 208) {
        sort.style.position = 'fixed'
        sort.style.top = '1rem'
        union.style.position = 'fixed'
        union.style.top = '1.5rem'
    }

    var contentListone = document.querySelector('.business .contentList').offsetTop
    var resultOne = contentListone - b
    if (resultOne > 100) {
        sort.style.position = ''
        sort.style.top = ''
        union.style.position = ''
        union.style.top = ''
    }

    window.onscroll = function () {
        var sort = document.querySelector('.business .sort')
        var union = document.querySelector('.business .union')

        var b = document.documentElement.scrollTop;
        var sortone = document.querySelector('.business .sort').offsetTop
        var result = sortone - b

        if (result <= 208) {
            sort.style.position = 'fixed'
            sort.style.top = '1rem'
            union.style.position = 'fixed'
            union.style.top = '1.5rem'
        }

        var contentListone = document.querySelector('.business .contentList').offsetTop
        var resultOne = contentListone - b
        if (resultOne > 100) {
            sort.style.position = ''
            sort.style.top = ''
            union.style.position = ''
            union.style.top = ''
        }
    }
    zsort.style.display = 'none'

}

// 底部
function footers (n) {
    var aOneImg = document.querySelector('.footer div #one img')
    var aOneSpan = document.querySelector('.footer div #one span')
    var aTweImg = document.querySelector('.footer div #twe img')
    var aTweSpan = document.querySelector('.footer div #twe span')
    var aThreeImg = document.querySelector('.footer div #three img')
    var aThreeSpan = document.querySelector('.footer div #three span')
    var aFourImg = document.querySelector('.footer div #four img')
    var aFourSpan = document.querySelector('.footer div #four span')

    aOneSpan.style.color = '#808080'
    aTweSpan.style.color = '#808080'
    aThreeSpan.style.color = '#808080'
    aFourSpan.style.color = '#808080'

    aOneImg.src = 'images/waimaiche1.png'
    aTweImg.src = 'images/chaoshi1.png'
    aThreeImg.src = 'images/dingdan2.png'
    aFourImg.src = 'images/wode2.png'
    
    if (n === 1) {
        aOneImg.src = 'images/waimaiche2.png'
        aOneSpan.style.color = '#2294FE'
    }
    if (n === 2) {
        aTweImg.src = 'images/chaoshi2.png'
        aTweSpan.style.color = '#2294FE'
    }
    if (n === 3) {
        aThreeImg.src = 'images/dingdan1.png'
        aThreeSpan.style.color = '#2294FE'
    }
    if (n === 4) {
        aFourImg.src = 'images/wode1.png'
        aFourSpan.style.color = '#2294FE'
    }
}



var loading = false;  //状态标记
$(document.body).infinite().on("infinite", function() {
    if(loading) return;
    loading = true;
    var jiaz = document.querySelector('.business .weui-loadmore')
    jiaz.style.display = 'block'
    setTimeout(function() {
        jiaz.style.display = 'none'

        $(".contentList").append(

            "<ul class=\"list\">\n" +
            "   <li>\n" +
                    
            "       <div class=\"listLeft\"><a href=\"javascript:\"><img src=\"images/dianmiantu.webp\"></a></div>\n" +
                "    <div class=\"listRight\">\n" +
                        " <div><span>金百万烧烤(浙商广场店)</span><a href=\"javascript:\"><img src=\"images/xuanxiang.png\"></a></div>\n" +
                        
                        "<div>\n" +
                            "<span><img src=\"images/xingx.png\"></span>\n" +
                            "<span>4.5</span>\n" +
                            "<span>月售</span>\n" +
                            "<span id=\"shou\">1472</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<span>起送￥15 远距离配送￥4.68 <del>￥7.18</del> 43分钟 <span id=\"span\">22</span>km</span>\n" +
                        " </div>\n" +

                        "<div>\n" +
                            "<span>“挺好开花馒头，牛肉时蔬拌饭”</span>\n" +
                            "<span>人人爱吃</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<a href=\"javascript:\">30减17</a>\n" +
                            "<a href=\"javascript:\">45减24</a>\n" +
                            "<a href=\"javascript:\">60减30</a>\n" +
                            "<a href=\"javascript:\">80减40</a>\n" +
                            "<a href=\"javascript:\"><img src=\"images/xia.png\"></a>\n" +
                        "</div>\n" +
                        
                    "</div>\n" +
                " </li>\n" +
            "</ul>\n" +


            "<ul class=\"list\">\n" +
            "   <li>\n" +
                    
            "       <div class=\"listLeft\"><a href=\"javascript:\"><img src=\"images/dianmiantu.webp\"></a></div>\n" +
                "    <div class=\"listRight\">\n" +
                        " <div><span>金百万烧烤(浙商广场店)</span><a href=\"javascript:\"><img src=\"images/xuanxiang.png\"></a></div>\n" +
                        
                        "<div>\n" +
                            "<span><img src=\"images/xingx.png\"></span>\n" +
                            "<span>4.5</span>\n" +
                            "<span>月售</span>\n" +
                            "<span id=\"shou\">3556</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<span>起送￥15 远距离配送￥4.68 <del>￥7.18</del> 43分钟 <span id=\"span\">22</span>km</span>\n" +
                        " </div>\n" +

                        "<div>\n" +
                            "<span>“挺好开花馒头，牛肉时蔬拌饭”</span>\n" +
                            "<span>人人爱吃</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<a href=\"javascript:\">30减17</a>\n" +
                            "<a href=\"javascript:\">45减24</a>\n" +
                            "<a href=\"javascript:\">60减30</a>\n" +
                            "<a href=\"javascript:\">80减40</a>\n" +
                            "<a href=\"javascript:\"><img src=\"images/xia.png\"></a>\n" +
                        "</div>\n" +
                        
                    "</div>\n" +
                " </li>\n" +
            "</ul>\n" +

            "<ul class=\"list\">\n" +
            "   <li>\n" +
                    
            "       <div class=\"listLeft\"><a href=\"javascript:\"><img src=\"images/dianmiantu.webp\"></a></div>\n" +
                "    <div class=\"listRight\">\n" +
                        " <div><span>金百万烧烤(浙商广场店)</span><a href=\"javascript:\"><img src=\"images/xuanxiang.png\"></a></div>\n" +
                        
                        "<div>\n" +
                            "<span><img src=\"images/xingx.png\"></span>\n" +
                            "<span>4.5</span>\n" +
                            "<span>月售</span>\n" +
                            "<span id=\"shou\">3556</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<span>起送￥15 远距离配送￥4.68 <del>￥7.18</del> 43分钟 <span id=\"span\">22</span>km</span>\n" +
                        " </div>\n" +

                        "<div>\n" +
                            "<span>“挺好开花馒头，牛肉时蔬拌饭”</span>\n" +
                            "<span>人人爱吃</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<a href=\"javascript:\">30减17</a>\n" +
                            "<a href=\"javascript:\">45减24</a>\n" +
                            "<a href=\"javascript:\">60减30</a>\n" +
                            "<a href=\"javascript:\">80减40</a>\n" +
                            "<a href=\"javascript:\"><img src=\"images/xia.png\"></a>\n" +
                        "</div>\n" +
                        
                    "</div>\n" +
                " </li>\n" +
            "</ul>\n" +

            "<ul class=\"list\">\n" +
            "   <li>\n" +
                    
            "       <div class=\"listLeft\"><a href=\"javascript:\"><img src=\"images/dianmiantu.webp\"></a></div>\n" +
                "    <div class=\"listRight\">\n" +
                        " <div><span>金百万烧烤(浙商广场店)</span><a href=\"javascript:\"><img src=\"images/xuanxiang.png\"></a></div>\n" +
                        
                        "<div>\n" +
                            "<span><img src=\"images/xingx.png\"></span>\n" +
                            "<span>4.5</span>\n" +
                            "<span>月售</span>\n" +
                            "<span id=\"shou\">3556</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<span>起送￥15 远距离配送￥4.68 <del>￥7.18</del> 43分钟 <span id=\"span\">22</span>km</span>\n" +
                        " </div>\n" +

                        "<div>\n" +
                            "<span>“挺好开花馒头，牛肉时蔬拌饭”</span>\n" +
                            "<span>人人爱吃</span>\n" +
                        "</div>\n" +

                        "<div>\n" +
                            "<a href=\"javascript:\">30减17</a>\n" +
                            "<a href=\"javascript:\">45减24</a>\n" +
                            "<a href=\"javascript:\">60减30</a>\n" +
                            "<a href=\"javascript:\">80减40</a>\n" +
                            "<a href=\"javascript:\"><img src=\"images/xia.png\"></a>\n" +
                        "</div>\n" +
                        
                    "</div>\n" +
                " </li>\n" +
            "</ul>\n"
            )      

        loading = false;
    }, 1000);   //模拟延迟


});



// 倒计时
//获取小时
var hours = document.querySelector('.discount .disContent .disContentOne #tuone .timeone .times .hours');

//获取分钟
var minutes = document.querySelector('.discount .disContent .disContentOne #tuone .timeone .times .minutes');

//获取秒数
var seconds = document.querySelector('.discount .disContent .disContentOne #tuone .timeone .times .seconds');

//封装函数
function fun () {

    //获取当前时间
    var dates = new Date();

    //获取当前时间的毫秒值
    var a = dates.getTime();

    //获取活动结束时间
    var end = new Date('2019-07-15 00:00:00');

    //获取结束时间的毫秒值
    var b = end.getTime();

    //获取活动期间的时间
    var c = b - a;

    //转换为小时
    var h = parseInt(c / 1000 / 60 / 60);

    //转换为分钟
    var m = parseInt(c / 1000 / 60 % 60);

    //转换为秒数
    var s = parseInt(c / 1000 % 60);

    //三元运算判断添加0
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    //添加内容
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    console.log(seconds)

    //如果活动时间结束设置都为0,主要看活动期间的毫秒值小于或等于0就活动结束了
    if (c <= 0) {
        
        hours.innerText = '00';
        minutes.innerText = '00';
        seconds.innerText = '00';

    } 

}

//先调用一下，防止刷新页面时有一秒的延迟
fun();

//添加一个定时器
setInterval( function () {
    fun();
    // location.reload()
},1000);



// 倒计时 end


// 距离
function juli() {
    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = '#06c'
    sore.style.color = ''
    sx.style.color = ''
    sortt.style.color = ''
    console.log('已点距离')
}

// 销量
function soreItem() {
    var sortt = document.querySelector('.business .sort .sortt')
    var juli = document.querySelector('.business .sort .juli')
    var sore = document.querySelector('.business .sort .sore')
    var sx = document.querySelector('.business .sort .sx')
    juli.style.color = ''
    sore.style.color = '#06c'
    sx.style.color = ''
    sortt.style.color = ''
    console.log('已点销量')
}

// 品质联盟
function pingz() {
    var pingz = document.querySelector('.business .union #pingz')
    var youhui = document.querySelector('.business .union #youhui')
    var peis = document.querySelector('.business .union #peis')
    var xind = document.querySelector('.business .union #xind')
    youhui.style.color = ''
    peis.style.color = ''
    xind.style.color = ''
    pingz.style.color = '#06c'
    console.log('已点击品质联盟')
}

// 满减优惠
function youhui() {
    var pingz = document.querySelector('.business .union #pingz')
    var youhui = document.querySelector('.business .union #youhui')
    var peis = document.querySelector('.business .union #peis')
    var xind = document.querySelector('.business .union #xind')
    pingz.style.color = ''
    peis.style.color = ''
    xind.style.color = ''
    youhui.style.color = '#06c'
    console.log('已点击满减优惠')
}

// 配送费优惠
function peis() {
    var pingz = document.querySelector('.business .union #pingz')
    var youhui = document.querySelector('.business .union #youhui')
    var peis = document.querySelector('.business .union #peis')
    var xind = document.querySelector('.business .union #xind')
    pingz.style.color = ''
    youhui.style.color = ''
    xind.style.color = ''
    peis.style.color = '#06c'
    console.log('已点击配送费优惠')
}

// 新店
function xind() {
    var pingz = document.querySelector('.business .union #pingz')
    var youhui = document.querySelector('.business .union #youhui')
    var peis = document.querySelector('.business .union #peis')
    var xind = document.querySelector('.business .union #xind')
    pingz.style.color = ''
    peis.style.color = ''
    peis.style.color = ''
    xind.style.color = '#06c'
    console.log('已点击新店')
}




// 首页 end



// 食物列表页 


// 食物列表页 end