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
                $(".main").load("./pages/personal.html")
                break

            default:
                hash = "#home"
                $(".main").load("./pages/home.html")
        }
        activeNav(hash)
    }
    function activeNav(hash) {
        $(".page-nav .navbar-nav .active").removeClass("active")
        $(`.page-nav .navbar-nav a[href='${hash}']`).closest("li").addClass("active")
    }
})