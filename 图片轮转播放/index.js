(function(){
    var oBigImg = document.getElementById("big-img");
    var aBigPic = oBigImg.getElementsByTagName("img");
    var oSmallImg = document.getElementById("small-img");
    var aSmallPic = oSmallImg.getElementsByTagName("img");
    var oPrev = document.getElementById("prev");
    var oNext = document.getElementById("next");
    var oInfo = document.getElementById("info");
    var oCurrentPage = document.getElementById("current-page");
    var iNow = 0;
    var zIndex = 9;

    /*for(var i=0;i<aBigPic.length;i++){    图片前后
        aBigPic[i].style.zIndex = aBigPic.length-i;
    }*/

    for(var i=0;i<aSmallPic.length;i++){
        aSmallPic[i].className = "small-opacity";
        aSmallPic[i].index = i;
        aSmallPic[i].onmouseover = function () {
            iNow = this.index;
            aSmallPic[iNow].className = "selected";
        };
        aSmallPic[i].onmouseout = function(){

        };
    }
        aSmallPic[iNow].className = "selected";

    oPrev.onmouseover = oNext.onmouseover = function(){
        animate(this,{opacity:100});
    };
    oPrev.onmouseout = oNext.onmouseout = function(){
        animate(this,{opacity:0});
    };

    oPrev.onclick = oNext.onclick = function(){
        if(this == oNext){
            iNow++;
            if(iNow == aBigPic.length){
                iNow = 0;
            }
        }else{
            iNow--;
            if(iNow == -1){
                iNow = aBigPic.length - 1;
            }
        }
        changeImg(iNow);
    };
    function changeImg(index) {
        aBigPic[index].style.opacity = 0;
        aBigPic[index].style.filter = "alpha(opacity = 0)";
        aBigPic[index].style.zIndex = zIndex++;
        animate(aBigPic[index],{opacity : 100});
        oPrev.style.zIndex = oNext.style.zIndex = oInfo.style.zIndex = zIndex++;
        oCurrentPage.innerHTML = index+1;
    }







    }
)( );