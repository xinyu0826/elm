// 评分星
var evaluate = $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_shu #pingfenspan').text();

if (evaluate <= 0) {
    
}
// 一星
if (evaluate > 0 && evaluate <= 1) {
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img2').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img3').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img5').attr('src','images/pingfen.png')
}
// 二星
if (evaluate > 1 && evaluate <= 2) {
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img3').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img5').attr('src','images/pingfen.png')
}
// 三星
if (evaluate > 2 && evaluate <= 3) {
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img5').attr('src','images/pingfen.png')
}
// 四星
if (evaluate > 3 && evaluate <= 4) {
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img4').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img5').attr('src','images/pingfen.png')
}
// 五星
if (evaluate > 4 && evaluate <= 5) {
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img4').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_top .evaluate_top_left .ping_xin .ping_xin_xia #img5').attr('src','images/5xin.png')
}

if (evaluate > 5) {
    alert('最高5分')
}


// 判断checkbox是否选中
function checkbox() {
    var checkbox1 = $(".store_description .evaluate .evaluate_footer .evaluate_content span input[type='checkbox']").is(':checked')
    
    if (checkbox1) {
        $('.store_description .evaluate .evaluate_footer .evaluate_content span img').attr('src','images/duihao2.png')
        console.log('未选中')
    } 
    if (!checkbox1) {
        $('.store_description .evaluate .evaluate_footer .evaluate_content span img').attr('src','images/duihao.png')
        console.log('已选中')
    } 
}


// 点击评价内容中顶部按钮事件
var a_btn = $('.store_description .evaluate .evaluate_footer .evaluate_footer_btn ul li a')
a_btn.on('touchend',function() {
    $('.store_description .evaluate .evaluate_footer .evaluate_footer_btn ul li a').css({'background-color':'#EAF5FE','color':'#6C7784'})
    $(this).css({'background-color':'#2294FE','color':'#FBFDFE'})
})


// 用户评价星级
var xinjiUser = $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .txt #txt_content').text();
console.log(xinjiUser)

// 一星
if (xinjiUser == '吐槽') {
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img2').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img3').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img5').attr('src','images/pingfen.png')
}
// 二星
if (xinjiUser == '较差') {
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img3').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img5').attr('src','images/pingfen.png')
}
// 三星
if (xinjiUser == '一般') {
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img4').attr('src','images/pingfen.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img5').attr('src','images/pingfen.png')
}
// 四星
if (xinjiUser == '满意') {
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img4').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img5').attr('src','images/pingfen.png')
}
// 五星
if (xinjiUser == '超赞') {
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img1').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img2').attr('src','images/2xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img3').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img4').attr('src','images/4xin.png')
    $('.store_description .evaluate .evaluate_footer .content_pingjia .content_right .xinji .xinji_img #img5').attr('src','images/5xin.png')
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

    $('.store_description .store_description_tab ul li #tabdiancan').attr('href','storePage.html')

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

    $('.store_description .store_description_tab ul li #tabdiancan').attr('href','evaluate.html')

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

    $('.store_description .store_description_tab ul li #tabdiancan').attr('href','business.html')

}