$(document).ready(function() {

    $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('div.loader').show();
        },
        success: function(data) {
            $('div.loader').hide();
            for (let i = 0; i < data.length; i++) {
                let html = (`   
                    <div class="carousel-item  ${i == 0 ? 'active' : ''} text-white p-5 id="carousel-item">
                        <div class="quote-image">
                            <img class="rounded-circle text-center" src=${data[i].pic_url} alt="First slide" width="120" height="120"></img>
                        </div>
                        <div class="quote w-50 ">
                            <p>${data[i].text}</p>
                            <h6 class="font-weight-bold">${data[i].name}</h6>
                            <p class="font-italic">${data[i].title}</p>
                        </div>
                    </div>
                </div>
                `);
                $('#carousel-inner').append(html);
                $('#carousel-inner1').append(html);
            }
        }
    }

    )
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('div.loader').show();
        },
        success: function(data) {
            $('div.loader').hide();
            for (let i = 0; i < data.length; i++) {
                let html1 = (`
                <div class="text-center col-12 col-sm-6 col-md-3">
                    <div class="carousel-item active">
                        <div class='tutorial-video-top'>
                            <img class="w-100" src=${data[i].thumb_url} alt="smile image">
                            <img src="./images/play.png" width="80" height="80" style="position: absolute; top: 30px; right: 80px;">
                        </div>
                        <div class="mx-1">
                            <div class="font-weight-bold text-dark text-left mt-3">
                                ${data[i].title}
                            </div>
                            <div class="text-secondary text-left mt-3 mb-3">
                                ${data[i]['sub-title']}
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <img src=${data[i].author_pic_url} class="rounded-circle " width="30" height="30" alt="profile image">
                                <div class="ml-2" style="color: #C271FF;">${data[i].author}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex pt-1">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                </div>
                                <div class="ml-4" style="color: #C271FF";>
                                    ${data[i].duration}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
            $('#tutorial-cards-container').append(html1);
            }
        }
    })
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        method: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('div.loader').show();
        },
        success: function(data) {
            $('div.loader').hide();
            for (let i = 0; i < data.length; i++) {
                let html2 = (`
                <div class="text-center col-12 col-sm-6 col-md-3">
                    <div class="carousel-item active">
                        <div class='tutorial-video-top'>
                            <img class="w-100" src=${data[i].thumb_url} alt="smile image">
                            <img src="./images/play.png" width="80" height="80" style="position: absolute; top: 30px; right: 80px;">
                        </div>
                        <div class="mx-1">
                            <div class="font-weight-bold text-dark text-left mt-3">
                                ${data[i].title}
                            </div>
                            <div class="text-secondary text-left mt-3 mb-3">
                                ${data[i]['sub-title']}
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <img src=${data[i].author_pic_url} class="rounded-circle" width="30" height="30" alt="profile image">
                                <div class="ml-2" style="color: #C271FF;">${data[i].author}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex pt-1">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img class="mr-1" src="./images/star_on.png" width="15" height="15">
                                    <img src="./images/star_off.png" width="15" height="15">
                                </div>
                                <div class="ml-5" style="color: #C271FF;">
                                    ${data[i].duration}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
            $('#latest-videos-cards').append(html2);
            }
        }
    })
})