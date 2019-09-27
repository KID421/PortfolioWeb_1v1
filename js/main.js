// jQuery
// 尋找指定元素 $('.btn-gold')
// 點下元素時執行 () 內的敘述
// function 函式、方法 - 一件事情
// $('.btn-gold').click(function () {
//     // 消失的區塊.移除("出現").加入("消失")
//     $('.work-box').removeClass('appear').addClass('disappear');
//     // 出現
//     $('.beer-gold').removeClass('disappear').addClass('appear');
// });

// $('.btn-black').click(function () {
//     // 消失的區塊.移除("出現").加入("消失")
//     $('.work-box').removeClass('appear').addClass('disappear');
//     // 出現
//     $('.beer-black').removeClass('disappear').addClass('appear');
// });

// $('.btn-orange').click(function () {
//     // 消失的區塊.移除("出現").加入("消失")
//     $('.work-box').removeClass('appear').addClass('disappear');
//     // 出現
//     $('.beer-orange').removeClass('disappear').addClass('appear');
// });

// 自定義函式 - 不會執行，需要呼叫
function filter(nameBtn, nameClass) {
    $(nameBtn).click(function () {
        // 消失的區塊.移除("出現").加入("消失")
        $('.work-box').removeClass('appear').addClass('disappear');
        // 出現
        $(nameClass).removeClass('disappear').addClass('appear');
    });
}

filter('.btn-gold', '.beer-gold');
filter('.btn-black', '.beer-black');
filter('.btn-orange', '.beer-orange');
filter('.btn-all', '.work-box');

// 關於我 information 點擊標題顯示內文
$(".description h2").click(function(){
    $(this).next('p').slideToggle(800);
});
