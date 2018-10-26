// var authorvar arrayTubes = new Array(
//     {
//         id: 'UCXao7aTDQM',
//         title: 'Tháng Tư Là Lời Nói Dối Của Em',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'dns2WLu8Su8',
//         title: 'Người Tình Mùa Đông',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'XyjhXzsVdiI',
//         title: 'Tình Thôi Xót Xa',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//          id: 'nrpjNgZCdlM',
//          title: 'Tái Bút Anh Yêu Em',
//         author: 'Hà Anh Tuấn'
//     }
// );
document.getElementById('btnsearch').onclick = function () {
    var keyword = document.getElementById('keyword').value;
    var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q=' + keyword + '&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<iframe src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

                videoItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem
            }
            document.getElementById('myTubes').innerHTML = content;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
var input = document.getElementById("keyword");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnsearch").click();
    }
});

