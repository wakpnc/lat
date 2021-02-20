function loophalaman(a) {
	var e = "";
    nomerkiri = parseInt(numshowpage / 2), nomerkiri == numshowpage - nomerkiri && (numshowpage = 2 * nomerkiri + 1), mulai = nomerhal - nomerkiri, mulai < 1 && (mulai = 1), maksimal = parseInt(a / postperpage) + 1, maksimal - 1 == a / postperpage && (maksimal -= 1), akhir = mulai + numshowpage - 1, akhir > maksimal && (akhir = maksimal), e += "<span class='text-muted'><b>  " + nomerhal + " - " + postperpage + " of " + maksimal + "</b></span>";
    var s = parseInt(nomerhal) - 1;
	
    nomerhal > 1 && (e += 2 == nomerhal ? "page" == jenis ? '<div class="btn-group btn-group-sm"><span class="showpage"><a href="' + home_page + '">' + upPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-left'/></button></a></span>" : '<div class="btn-group btn-group-sm"><span class="showpageNum"><a href="/search/label/' + lblname1 + "?&max-results=" + postperpage + '">' + upPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-left'/></button></a></span>" :	"page" == jenis ? '<div class="btn-group btn-group-sm"><span class="showpageNum"><a href="#" onclick="redirectpage(' + s + ');return false">' + upPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-left'/></button></a></span>" : '<div class="btn-group btn-group-sm"><span class="showpageNum"><a href="#" onclick="redirectlabel(' + s + ');return false">' + upPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-left'/></button></a></span>"),  mulai > 2 && (e += "");
	var n = parseInt(nomerhal) + 1;
	
    nomerhal < maksimal && (e += "page" == jenis ? '<span class="showpageNum"><a href="#" onclick="redirectpage(' + n + ');return false">' + downPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-right'/></button></a></span>" : '<span class="showpageNum"><a href="#" onclick="redirectlabel(' + n + ');return false">' + downPageWord + "<button class='btn btn-default'><span class='fa fa-chevron-right'/></button></a></span></div>");
    for (var t = document.getElementsByName("pageArea"), l = document.getElementById("blog-pager"), p = 0; p < t.length; p++) t[p].innerHTML = e;
    t && t.length > 0 && (e = ""), l && (l.innerHTML = e)
	
}

function hitungtotaldata(a) {
    var e = a.feed,
        s = parseInt(e.openSearch$totalResults.$t, 10);
    loophalaman(s)
}

function halamanblogger() {
    var a = urlactivepage; - 1 != a.indexOf("/search/label/") && (lblname1 = -1 != a.indexOf("?updated-max") ? a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?updated-max")) : a.substring(a.indexOf("/search/label/") + 14, a.indexOf("?&max"))), -1 == a.indexOf("?q=") && -1 == a.indexOf(".html") && (-1 == a.indexOf("/search/label/") ? (jenis = "page", nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata"></script>')) : (jenis = "label", -1 == a.indexOf("&max-results=") && (postperpage = 20), nomerhal = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + lblname1 + '?alt=json-in-script&callback=hitungtotaldata&max-results=1" ></script>')))
}

function redirectpage(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function redirectlabel(a) {
    jsonstart = (a - 1) * postperpage, nopage = a;
    var e = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
    s.type = "text/javascript", s.setAttribute("src", home_page + "feeds/posts/summary/-/" + lblname1 + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), e.appendChild(s)
}

function finddatepost(a) {
    post = a.feed.entry[0];
    var e = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        s = encodeURIComponent(e);
    if ("page" == jenis) var r = "/search?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    else var r = "/search/label/" + lblname1 + "?updated-max=" + s + "&max-results=" + postperpage + "#PageNo=" + nopage;
    location.href = r
}
var nopage, jenis, nomerhal, lblname1;
halamanblogger();
