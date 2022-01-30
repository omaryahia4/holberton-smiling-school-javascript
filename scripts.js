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
                let html1 = (``)
            }
        }
    })
})