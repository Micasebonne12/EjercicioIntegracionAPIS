/* Function cuando el documento esté cargado hace una petición GET con AJAX a la URL */
$(document).ready(function () {
    $.ajax({
        url: "https://dog.ceo/api/breeds/list",
        method: 'GET',
        dataType: 'json',
        /* Si recibe la respuesta correctamente, ocurre la función success */
        success: function (data) {
            /* Recorre los datos que encuentra, captura el id razas (un div en el HTML) y le agrega para cada ítem un boton con un evento*/
            data.message.forEach(function (raza) {
                $('#razas').append(`<button type="button" onclick="verImg(event, '${raza}')" class="btn btn-danger text-white" style="margin-bottom: 20px" data-bs-toggle="modal" data-bs-target="#modalButton">
                        ${raza}
                      </button>`);
            })
        }
    });

    /*La función verImg toma como parametro un evento y la raza*/
    verImg = (e, raza) => {
        /* Hace un console.log del evento */
        console.log(e);
        /* Petición GET con AJAX a la URL donde estan las imagenes, siendo la pasada por parametro la que aparezca*/
        $.ajax({
            url: `https://dog.ceo/api/breed/${raza}/images/random`,
            method: 'GET',
            /* Si la petición sale bien, escribe como título del modal, el nombre del perro clickeado y la imagen correspondiente a ese perrito*/
            success: function (data) {
                $('#titleModalLabel').html(`${raza}`)
                $('#imagen').attr('src', data.message)
            }
        });
    }
});