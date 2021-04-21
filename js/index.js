$(function () {
    window.onhashchange = loadPage
    loadPage();
    function loadPage() {
        var hash = location.hash;

        switch (hash) {
            case "#home":
                $(".main").load("./pages/home.html")
                break
            case "#inveset":
                $(".main").load("./pages/inveset.html")
                break
            case "#borrow":
                $(".main").load("./pages/borrow.html")
                break
            case "#personal":
                loadPersonalPage("info")
                break;
            case "#personal/info":
                loadPersonalPage("info")
                break;
            case "#personal/auth":
                loadPersonalPage("auth")
                break;
            case "#personal/card":
                loadPersonalPage("card")
                break;
            case "#personal/record":
                loadPersonalPage("record")
                break;

            default:
                hash = "#home"
                $(".main").load("./pages/home.html")
        }
        activeNav(hash)
    }
    function activeNav(hash) {
        hash = hash.split("/")[0];
        $(".page-nav .navbar-nav .active").removeClass("active")
        //找到a标签中herf的值和hash相等的a标签，然后给父li加active
        $(`.page-nav .navbar-nav a[href='${hash}']`).closest("li").addClass("active")
    }
    function loadPersonalPage(page) {
        //查看当前页面是否存在personal-page的元素
        var isExitPersonalPage = $(".personal-page").length;
        if (isExitPersonalPage) {
            //如果存在，说名在个人中心页面，只加载二级页面
            $(".personal-right").load(`/pages/personal/${page}.html`, function () {
                actiiveSecondNav(page);
            })
        } else {
            //如果不存在，说明不在个人中心页面，加载一级和二级页面
            $(".main").load("./pages/personal.html", function () {
                actiiveSecondNav(page);
                $(".personal-right").load(`/pages/personal/${page}.html`)
            });
        }

    }
    /* 激活二级导航 */
    function actiiveSecondNav(page) {
        var hash = `#personal/${page}`;
        $(".personal-page .list-group li.active").removeClass("active");
        $(`.personal-page .list-group li a[href='${hash}']`).closest("li").addClass("active");

    }
})