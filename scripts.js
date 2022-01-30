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
                    <div class="carousel-item ${i == 0 ? 'active' : ''} text-white d-flex justify-content-center p-5 id="carousel-item">
                        <img class="rounded-circle " src=${data[i].pic_url} alt="First slide" width="120" height="120"></img>
                        <div class="w-50 ml-4">
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
})