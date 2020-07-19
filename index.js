var tops = document.querySelector(".top")
var navs = document.querySelector(".nav-ce")
var navlist = document.querySelectorAll(".nav-ce-scroll li")
var navlast = document.querySelectorAll(".backtop")[0]
// console.log(navlist)
var conlist = document.querySelectorAll(".brand")
// console.log(conlist)
//侧边栏跳转
for (var i = 0; i < navlist.length; i++) {
    //把数据存储到对象的属性里面
    navlist[i].top = conlist[i].offsetTop;
    navlist[i].height = conlist[i].offsetHeight;//获取高度方便侧边栏颜色改变
    navlist[i].onclick = function () {
        animate(document.documentElement, {
            scrollTop: this.top
        }, 500)
        console.log(this.top)
    }
}

//顶部跳转
navlast.onclick = function () {
    animate(document.documentElement, {
        scrollTop: 0
    }, 500)
}
window.onscroll = function () {
    var st = document.documentElement.scrollTop;
    //顶部条显示
    if (st > 700) {
        // search.style.top = 0
        animate(tops, {
            top: 0,
        }, 300)
    } else {
        // search.style.top = -50 + "px"
        animate(tops, {
            top: -70
        }, 300)
    }
    //侧边栏出现
    if (st > 700) {
        animate(navs, {
            width: 36,
            height: 230,
            opacity: 1
        }, 300)
    } else {
        animate(navs, {
            width: 0,
            height: 0,
            opacity: 0
        }, 300)
    }

    //侧边栏颜色
    for (var i = 0; i < navlist.length; i++) {
        if (navlist[i].top < st && navlist[i].top + navlist[i].height > st) {
            for (var j = 0; j < navlist.length; j++) {
                navlist[j].style.background = "#ccc"
            }
            navlist[i].style.background = navlist[i].getAttribute("color")
        }
    }
}



//轮播图
var win = document.querySelector(".banner")
var btns = document.querySelectorAll(".btns li")
var listimg = document.querySelectorAll(".back-img .banner-img")
var num = 0
function move() {
    num++
    if (num > listimg.length - 1) {
        num = 0
    }
    for (var i = 0; i < listimg.length; i++) {
        listimg[i].style.opacity = 0
        listimg[i].style.zIndex = 0
        btns[i].style.background = "#000"
    }
    animate(listimg[num], {
        opacity: 1
    }, 100, Tween.Linear, function () {
        listimg[num].style.zIndex = 1
    })
    btns[num].style.background = "blueviolet"
}
var t = setInterval(move, 3000)

for (let i = 0; i < btns.length; i++) {

    btns[i].onclick = function () {
        num = i
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.background = "#000"
            listimg[j].style.opacity = 0
            listimg[j].style.zIndex = 0
        }
        btns[num].style.background = "blueviolet"
        animate(listimg[num], {
            opacity: 1
        }, 100, Tween.Linear, function () {
            listimg[num].style.zIndex = 1
        })
    }

}
win.onmouseover = function () {
    clearInterval(t)
}
win.onmouseout = function () {
    t = setInterval(move, 3000)
}

//浮快显示
var heikuai = document.querySelector(".list-nav")
var fukuai = document.querySelector(".category-list-more")
heikuai.onmouseover = function () {
    fukuai.style.zIndex = 4;
}
heikuai.onmouseout = function () {
    fukuai.style.zIndex = -1;
}

// 按需加载


// 天猫超市选项块
var markone = document.querySelectorAll(".floor-current-tab")
var marktow = document.querySelectorAll(".floor-tab-content")


for (let i = 0; i < markone.length; i++) {
    markone[i].onclick = function () {
        for (var j = 0; j < marktow.length; j++) {
            markone[j].style.background = 'rgb(241,241,241)';
            marktow[j].style.display = "none";
        }
        markone[i].style.background = "#00B262";
        marktow[i].style.display = "block";
    }
}

var i = 1
function run() {
    if (i % 2 == 1) {
        markone[0].style.background = "#00B262";
        marktow[0].style.display = "block";
        markone[1].style.background = 'rgb(241,241,241)';
        marktow[1].style.display = "none";
    } else {
        markone[1].style.background = "#00B262";
        marktow[1].style.display = "block";
        markone[0].style.background = 'rgb(241,241,241)';
        marktow[0].style.display = "none";
    }
    i++;
}

setInterval(run, 1000)

// 侧边栏出现
