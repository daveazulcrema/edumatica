function popup() {
    $.ajax({
        type: 'get',
        url: 'AppDepartmentEmployee/employees/Create',
        data: {
            'field1': 'hello',
            'field2': 'hello1'
        },
        success: function (response) {
            $("#show-modal").modal({ show: true, backdrop: 'static', keyboard: false })
            $('#inner-show-modal').html(response);
        },
        error: function () {
            alert("error");
        }
    });
};