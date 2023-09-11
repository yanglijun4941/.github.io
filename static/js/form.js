var commitStatus = false;
function submitform() {
    if (document.getElementById("name").value == "") {
        alert("请输入您的姓名!");
        document.getElementById("name").focus();
        return;
    }
    if (document.getElementById("tel").value == "") {
        alert("请输入您的联系电话!");
        document.getElementById("tel").focus();
        return;
    }
    if (document.getElementById("tel").value != "") {
        var telReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
        if (!telReg.test(document.getElementById("tel").value)) {
            document.getElementById("tel").focus();
            alert("请输入正确的联系电话!");
            return;
        }
    }
    if (document.getElementById("address").value == "") {
        alert("请输入您的单位!");
        document.getElementById("address").focus();
        return;
    }
    if (document.getElementById("email").value != "") {
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (!myreg.test(document.getElementById("email").value)) {
            document.getElementById("email").focus();
            alert("请输入正确的电子邮箱!");
            return;
        }
    }

    var province = $("#province").find('a').html();
    var city = $("#city").find('a').html();
    var area = $("#area").find('a').html();
    var location = ""
    if (province != "省") {
        if (city == "市") {
            location = province;
        }
        else if (area == "区") {
            location = province + city
        }
        else {
            location = province + city + area;
        }
    }

    var service = "";
    $(".liNow").find('.lbox').each(function (key, val) {
        service += $(this).html() + ",";
    })
    if (service.length > 0) {
        service = service.substr(0, service.length - 1);
    }
    else {
        alert("至少选择一项服务需求!");
        return;
    }

    if (document.getElementById("Code").value == "") {
        alert("请输入你的验证码!");
        document.getElementById("Code").value.focus();
        return;
    }
    if (commitStatus == false) {
        $.ajax({
            type: "post",
            url: "/AjaxAction/message.aspx?action=subform",
            data: { name: $("#name").val(), tel: $("#tel").val(), address: $("#address").val(), email: $("#email").val(), location: location, service: service, FormCheckCode: $("#Code").val() },
            success: function (data) {
                if (data == "1") {
                    commitStatus = true;
                    alert("恭喜，您的留言已提交成功!");
                    $(".formLayer.form input").val("");
                    setTimeout("location.href = document.URL", 1000);//延时2秒
                }
                else if (data == "2") {
                    alert("验证码错误!");
                }
                else {
                    alert("抱歉，您的留言提交失败，请重新尝试!");
                }
            }

        });
        return;
    } else {
        return;
    }
}

$(document).on('click', '#province li', function () {
    var dataId = $("#province").find('a').attr('data-id')
    $("#city").find('a').html("市");
    $("#city").find('a').attr('data-id', "");
    $("#area").find('a').html("区");
    $("#area").find('a').attr('data-id', "");
    $.ajax({
        url: "/AjaxAction/form.ashx?action=city&parentid=" + dataId,
        type: "get",
        data: "",
        dataType: "json",
        success: function (data) {
            var sum = data.length;
            if (sum > 0) {
                var result = '<ul>';
                for (var i = 0; i < sum; i++) {
                    result += '<li onclick="childToggle(this)" data-id="' + data[i].ID + '">' + data[i].Name + '</li>';
                }
                result += '</ul>';
                $('#city').find('dd').html(result);
            }
        },
        error: function (xhr, type) {
            alert('Ajax error!');
        }
    });
});
$(document).on('click', '#city li', function () {
    var dataId = $("#city").find('a').attr('data-id')
    $("#area").find('a').html("区");
    $("#area").find('a').attr('data-id', "");
    $.ajax({
        url: "/AjaxAction/form.ashx?action=area&parentid=" + dataId,
        type: "get",
        data: "",
        dataType: "json",
        success: function (data) {
            var sum = data.length;
            if (sum > 0) {
                var result = '<ul>';
                for (var i = 0; i < sum; i++) {
                    result += '<li onclick="childToggle(this)" data-id="' + data[i].ID + '">' + data[i].Name + '</li>';
                }
                result += '</ul>';
                $('#area').find('dd').html(result);
            }
        },
        error: function (xhr, type) {
            alert('Ajax error!');
        }
    });
});