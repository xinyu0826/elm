
$(window).on('scroll',function () {
    // 获取被卷去的页面间距
    var v = $(window).scrollTop();
    
    // 图片缩放隐藏显示
    if (v > 20) {
        $('.bgcolortop .store_img').hide(500,'linear',function(){
            $('.bgcolortop .store_img').stop()
        })

        $('.bgcolortop .store_sou').hide(500,'linear',function(){
            $('.bgcolortop .store_sou').stop()
        })
    }
    if (v <= 20) {
        $('.bgcolortop .store_img').show(500,'linear',function(){
            $('.bgcolortop .store_img').stop()
        })

        $('.bgcolortop .store_sou').show(500,'linear',function(){
            $('.bgcolortop .store_sou').stop()
        })
    }


    // 头部显示隐藏

    // 获取店面描述
    var title = $('.store_description .store_title').offset().top;
    // 获取顶部导航栏
    var storeTopNav = $('.storeTopNav').offset().top;

    // 获取滑动隐藏显示的导航栏
    var showNav = $('.showNav').offset().top;
    var res = title - v;

    if (res <= 20) {
        $('.storeTopNav').css({'display':'none'});
        $('.showNav').css({'display':'block'});
    }

    if (res > 20) {
        $('.storeTopNav').css({'display':'block'});
        $('.showNav').css({'display':'none'});
    }

    // 点餐，评价  滚动效果
    var tab = $('.store_description .store_description_tab').offset().top;

    if (v > 260) {
        $('.store_description .store_description_tab').css({
            'position':'fixed',
            'top':'0.2rem',
            'z-index':'9999'
        })
    }

    if (v <= 260) {
        $('.store_description .store_description_tab').css({
            'position':'',
            'top':'',
            'z-index':''
        })
    }

    if (v < 5) {
        // 手指向下滑动的时候
        var startY;
        document.querySelector('.store_description').addEventListener('touchstart',function(e) {
            startY = e.changedTouches[0].pageY;
        },false)
        document.querySelector('.store_description').addEventListener('touchend',function (e) {
            var endY = e.changedTouches[0].pageY;
            var res = endY - startY;
            // 下滑
            if ( endY > startY && res > 200 ) {
                console.log('下滑')
                // 显示
                $('.store_description .store_content').show(1000,'linear',function(){})
                $('.store_btn').show(1000,'linear',function(){})

                // 隐藏满减
                $('.store_description .store_title .reduction').hide()
                // 隐藏tab切换
                $('.store_description .store_description_tab').hide()
                // 隐藏点餐内容
                $('.store_description .order_content').hide()
                // 隐藏图层
                $('.store_description .tucheng').hide()
                // 隐藏热销
                $('.store_description .sell').hide()
                // 隐藏底部购物车
                $('.footergpuwu').hide()
                
            }
        })
    }

    // 显示新用户下单立减20元
    if ( v >= 100 ) {
        console.log('大于100')
        $('.newUser').show()
    }
    // 隐藏新用户下单立减20元
    if ( v < 100 ) {
        $('.newUser').hide()
    }

    console.log($('.store_description .sell .rightcontentone #top_youhui').offset().top)

})

var sellscroll = document.querySelector('.store_description .sell .rightcontentone')

sellscroll.addEventListener('scroll',function () {
    console.log('已监听')
    // 距离这个盒子顶部的距离
    var selltop = $(this).scrollTop();
    // console.log(selltop)

    // 【让对应的楼梯突出显示】

    // 热销
    if (selltop >= 0) {
        
        $('.store_description .sell .leftcontent ul li a').removeClass('active')
        $('.store_description .sell .leftcontent ul li #rexiao').addClass('active')
    }

    // 优惠
    if (selltop >= 553) {
        
        $('.store_description .sell .leftcontent ul li a').removeClass('active')
        $('.store_description .sell .leftcontent ul li #youhui').addClass('active')
    }

    // 折扣
    if (selltop >= 1361) {
        
        $('.store_description .sell .leftcontent ul li a').removeClass('active')
        $('.store_description .sell .leftcontent ul li #zhekou').addClass('active')
    }
})


function showHide () {
    console.log('调用我了...')

    // 显示tab切换
    $('.store_description .store_description_tab').show()
    // 显示点餐内容
    $('.store_description .order_content').show()
    // 显示图层
    $('.store_description .tucheng').show()
    // 显示热销
    $('.store_description .sell').show()

    // 隐藏
    $('.store_description .store_content').hide(1000,'linear',function(){})
    $('.store_btn').hide(1000,'linear',function(){
        // 显示购物车
        $('.footergpuwu').show()
        // 显示满减
        $('.store_description .store_title .reduction').show()
    })
}

// 点击底部按钮
function btn() {
    console.log('点我了...')
    showHide();
}

// 点击向上按钮
function imgs() {
    console.log('点我了...')
    showHide();
}

// 点餐，
function tabdiancan() {

    $('.store_description .store_description_tab ul li #tabdiancan').css({
        'border-bottom': '0.02rem solid #06c'
    })
    $('.store_description .store_description_tab ul li #tabpingjia').css({
        'border-bottom': 'none'
    })
    $('.store_description .store_description_tab ul li #tabshangjia').css({
        'border-bottom': 'none'
    })

}

// 评价
function tabpingjia() {
    
    $('.store_description .store_description_tab ul li #tabdiancan').css({
        'border-bottom': 'none'
    })
    $('.store_description .store_description_tab ul li #tabpingjia').css({
        'border-bottom': '0.02rem solid #06c'
    })
    $('.store_description .store_description_tab ul li #tabshangjia').css({
        'border-bottom': 'none'
    })

}

// 商家
function tabshangjia() {

    $('.store_description .store_description_tab ul li #tabdiancan').css({
        'border-bottom': 'none'
    })
    $('.store_description .store_description_tab ul li #tabpingjia').css({
        'border-bottom': 'none'
    })
    $('.store_description .store_description_tab ul li #tabshangjia').css({
        'border-bottom': '0.02rem solid #06c'
    })

}

function leftcontent(i) {
    $('.store_description .sell .leftcontent ul li a').removeClass('active')
    $('.store_description .sell .leftcontent ul li a').eq(i).addClass('active')
    $('html,body').animate({ scrollTop: 580 }, 500, 'linear');

    var selltop = $('.store_description .sell').offset().top

    // 对应楼层的高度
    var rexiaotop = $('.store_description .sell .rightcontentone #top_rexiao').offset().top
    var youhuitop = $('.store_description .sell .rightcontentone #top_youhui').offset().top
    var zhekoutop = $('.store_description .sell .rightcontentone #top_zhekou').offset().top

    console.log('已点击' + youhuitop)

    // 热销
    if (i == 0) {
        $('.store_description .sell .rightcontentone').animate({scrollTop:0},500,'linear')
    }

    // 优惠
    if (i == 1) {
        $('.store_description .sell .rightcontentone').animate({scrollTop:553},500,'linear')
    }

    // 折扣
    if (i == 2) {
        $('.store_description .sell .rightcontentone').animate({scrollTop:1361},500,'linear')
    }
}




