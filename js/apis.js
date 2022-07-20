$(document).ready(function () {
    $.ajax({
        url: "https://dog.ceo/api/breeds/list",
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            data.message.forEach(function (raza) {
                $('#razas').append(`<li class="list-group-item justify-content-between align-items-center" onclick="verImg(event, '${raza}')">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalButton">
                        ${raza}
                      </button> </li>`);
            })
        }
    });

    verImg = (e, raza) => {
        console.log(e);
        $.ajax({
            url: `https://dog.ceo/api/breed/${raza}/images/random`,
            method: 'GET',
            success: function (data) {
                $('#titleModalLabel').html(`${raza}`)
                $('#imagen').attr('src', data.message)
            }
        });
    }
});