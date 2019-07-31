// 美食列表页 开始

// 品质联盟
function pingz() {
    var pingz = document.querySelector('.food_union #pingz')
    var youhui = document.querySelector('.food_union #youhui')
    var peis = document.querySelector('.food_union #peis')
    var xind = document.querySelector('.food_union #xind')
    youhui.style.color = ''
    peis.style.color = ''
    xind.style.color = ''
    pingz.style.color = '#06c'
    console.log('已点击' + pingz.innerText)
}

// 满减优惠
function youhui() {
    var pingz = document.querySelector('.food_union #pingz')
    var youhui = document.querySelector('.food_union #youhui')
    var peis = document.querySelector('.food_union #peis')
    var xind = document.querySelector('.food_union #xind')
    pingz.style.color = ''
    peis.style.color = ''
    xind.style.color = ''
    youhui.style.color = '#06c'
    console.log('已点击' + youhui.innerText)
}

// 配送费优惠
function peis() {
    var pingz = document.querySelector('.food_union #pingz')
    var youhui = document.querySelector('.food_union #youhui')
    var peis = document.querySelector('.food_union #peis')
    var xind = document.querySelector('.food_union #xind')
    pingz.style.color = ''
    youhui.style.color = ''
    xind.style.color = ''
    peis.style.color = '#06c'
    console.log('已点击' + peis.innerText)
}

// 新店
function xind() {
    var pingz = document.querySelector('.food_union #pingz')
    var youhui = document.querySelector('.food_union #youhui')
    var peis = document.querySelector('.food_union #peis')
    var xind = document.querySelector('.food_union #xind')
    pingz.style.color = ''
    peis.style.color = ''
    peis.style.color = ''
    xind.style.color = '#06c'
    console.log('已点击' + xind.innerText)
}



var loading = false;  //状态标记
$(document.body).infinite().on("infinite", function() {
    if(loading) return;
    loading = true;
    var jiaz = document.querySelector('.business .weui-loadmore')
    jiaz.style.display = 'block'
    setTimeout(function() {
        jiaz.style.display = 'none'

        $(".business .contentList").append(

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

// 美食列表页 end