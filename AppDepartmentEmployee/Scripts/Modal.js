function popup(url_, type_) {
    $.ajax({
        type: type_,
        url: url_,
        //data: { },
        success: function (response) {
            $("#show-modal").modal({ show: true, backdrop: 'static', keyboard: false })
            $('#inner-show-modal').html(response);
        },
        error: function () {
            alert("error");
        }
    });
};