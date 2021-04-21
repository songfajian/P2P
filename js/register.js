$(function () {
    $("#username").change(usernameValidete)
    function usernameValidete() {
        var flag = false;
        var val = $("#username").val();
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        flag = reg.test(val);
        if (flag) {
            $("#username").css("border", "1px solid green")
            $("#username-msg").html("√").css("color", "green")
        } else {
            $("#username").css("border", "1px solid red")
            $("#username-msg").html("请输入4到16位(字母,数字,下划线,减号)").css("color", "red")
        }
        return flag
    }
    $("#pwd").change(pwdVilidete)
    function pwdVilidete() {
        var flag = false;
        var val = $("#pwd").val();
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/;
        flag = reg.test(val);
        if (flag) {
            $("#pwd").css("border", "1px solid green")
            $("#pwd-msg").html("√").css("color", "green")
        } else {
            $("#pwd").css("border", "1px solid red")
            $("#pwd-msg").html("请输入最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符").css("color", "red")
        }
        return flag
    }
    $("#email").change(emailVilideta)
    function emailVilideta() {
        var flag = false;
        var val = $("#email").val();
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        flag = reg.test(val);
        if (flag) {
            $("#email").css("border", "1px solid green")
            $("#email-msg").html("√").css("color", "green")
        } else {
            $("#email").css("border", "1px solid red")
            $("#email-msg").html("请输入正确的email").css("color", "red")
        }
        return flag
    }
    $("#nickname").change(nicknameVilideta)
    function nicknameVilideta() {
        var flag = false;
        var val = $("#nickname").val();
        var reg = /[^\x00-\x80]/;
        flag = reg.test(val);
        if (flag) {
            $("#nickname").css("border", "1px solid green")
            $("#nickname-msg").html("√").css("color", "green")
        } else {
            $("#nickname").css("border", "1px solid red")
            $("#nickname-msg").html("请输入中文汉字").css("color", "red")
        }
        return flag
    }

    $("#register-btn").click(function () {
        if (usernameValidete() && pwdVilidete() && emailVilideta() && nicknameVilideta()) {
            console.log("成功");
        } else {
            console.log("失败");
        }
    })
})