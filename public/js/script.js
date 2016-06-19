function getPhotos(keyword) {

    var request = new XMLHttpRequest();

    request.open('GET', '/api/photos/' + keyword, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            console.log(data);

        }
    };

    request.send();

}
