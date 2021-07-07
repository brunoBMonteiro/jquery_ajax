function consultarCep() {
    $.ajax({
        url: "http://viacep.com.br/ws/01001000/json/",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    })
}