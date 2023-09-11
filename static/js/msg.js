function getCookie(cookie_name) {
    var allcookies = document.cookie;
    //索引长度，开始索引的位置
    var cookie_pos = allcookies.indexOf(cookie_name);

    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可
        //计算取cookie值得开始索引，加的1为“=”
        cookie_pos = cookie_pos + cookie_name.length + 1;
        //计算取cookie值得结束索引
        var cookie_end = allcookies.indexOf(";", cookie_pos);

        if (cookie_end == -1) {
            cookie_end = allcookies.length;

        }
        //得到想要的cookie的值
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));
    }
    return value;
}

var Cookie = {
    Set: function () {
        var name = arguments[0], value = escape(arguments[1]),
            days = (arguments.length > 2) ? arguments[2] : 365,
            path = (arguments.length > 3) ? arguments[3] : "/";
        with (new Date()) {
            setDate(getDate() + days);
            days = toUTCString();
        }
        document.cookie = "{0}={1};expires={2};path={3}".format(name, value, days, path);
    },
    Set1Day: function () {
        var name = arguments[0], value = escape(arguments[1]),
            days = (arguments.length > 2) ? arguments[2] : 365,
            path = (arguments.length > 3) ? arguments[3] : "/";
        with (new Date()) {
            setDate(getDate() + days);
            days = toUTCString();
        }
        document.cookie = "{0}={1};expires={2};path={3}".format(name, value, days, path);
    },
    Set30Min: function () {
        var name = arguments[0], value = escape(arguments[1]),
            days = (arguments.length > 2) ? arguments[2] : 0.5,
            path = (arguments.length > 3) ? arguments[3] : "/";
        with (new Date()) {
            setHours(getHours() + days);
            days = toUTCString();
        }

        var time = new Date();
        var b = 30; //分钟数
        time.setMinutes(time.getMinutes() + b, time.getSeconds(), 0);


        document.cookie = "{0}={1};expires={2};path={3}".format(name, value, time, path);
    },
    Get: function () {
        var returnValue = document.cookie.match(new RegExp("[\b\^;]?" + arguments[0] + "=([^;]*)(?=;|\b|$)", "i"));
        return returnValue ? unescape(returnValue[1]) : returnValue;
    },
    Delete: function () {
        var name = arguments[0];
        document.cookie = name + "=1 ; expires=Fri, 31 Dec 1900 23:59:59 GMT;";
    }
}