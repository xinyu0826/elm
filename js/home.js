// home页面


window.onscroll = function () {
    
    var homeUserName = document.querySelector('.homeUserName').offsetTop
    var span = document.querySelector('.homeTop span')
    var b = document.documentElement.scrollTop || document.body.scrollTop;
    var result = homeUserName - b
    // console.log(result)
    if (result === -26) {
        span.style.display = 'block'
    }
    if (result === 55) {
        span.style.display = 'none'
    }
}

// 用户头像上传
function previewImage() {
  var files = document.querySelector('.homeHeader #avatar #file_avatar')
  console.dir(files)

  // 获取图片名称
  var filesUrl = files.files[0].name

  // 截取图片名称小数点后的字符串
  var ftype = filesUrl.substring(filesUrl.lastIndexOf('.')+1)

  // 校验格式是否是图片类型
  if (ftype == 'jpg' || ftype == 'png' || ftype == 'jpeg' || ftype == 'JPG' || ftype == 'webp') {
    // 限制大小不能超过1M
    var sizes = files.size / 1024 / 1024
    if (sizes > 1){
      alert('图片不能大于1M')
      return false
    }

    // 并更换图片
    var filesImg = document.querySelector('.homeHeader #avatar #filesImg')
    

    // 获取图片路径
    var filew = files.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(filew)
    reader.onload = function () {
      console.log('文件处理完成')
      filesImg.src = reader.result;
      // console.log(filesImg.src)
    }

  } else {
    alert('头像格式不对，请重新选择！')
    return false;
  }
}


// home end