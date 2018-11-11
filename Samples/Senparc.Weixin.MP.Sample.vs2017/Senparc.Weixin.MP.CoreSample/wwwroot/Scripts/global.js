﻿$(function () {
    loadQQGroups();

    $('.btn-top-menu').hover(function () {
        $(this).find('ul.nav-sub-catalog').show();
    }, function () {
        $(this).find('ul.nav-sub-catalog').hide();
    });

    var noticeareaHeight = $('#noticearea').height();
    var noticeareaHeight_shrink = noticeareaHeight * 2 / 3;
    $('#noticearea').height(noticeareaHeight_shrink);
    $('#noticearea').hover(function () {
        $('#noticearea').animate({ height: noticeareaHeight });
        //$('#noticearea').css('position', 'absolute');
    }, function () {
        $('#noticearea').animate({ height: noticeareaHeight_shrink });
    });
});

$(function () {
});

function loadQQGroups() {
    $.ajax({
        type: "get",
        async: false,
        url: "https://weixin.senparc.com/WeixinSdk/GetSdkQqGroupListJson",
        dataType: "jsonp",
        jsonp: "callbackparam", //服务端用于接收callback调用的function名的参数
        jsonpCallback: "success_jsonpCallback", //callback的function名称
        success: function (json) {
            $('#qqGroups').html(json[0].html);
            $('#contact-content li.contact-qq').darkTooltip({
                theme: 'light'
            });
        },
        error: function () {
            //alert('fail');
        }
    });
}