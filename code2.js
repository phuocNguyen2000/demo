(function (){
    $("#btn").click(()=>{
        var s=$("#txt").val();
        var s1=$("#txtuser").val();
        if(s=="")
        {
            $("#txt").css("background-color", "red");
        }
        else
        {
            $("#txt").css("background-color", "white");
            alert("hello----world");
            if(s1.length<6)
                    {
                        alert("vui lòng nhập tên đăng nhập trên 6 ký tự");
                    }
                    else
                    {
                        if( $.isNumeric($("#txtdt").val())==false)
                        {
                            alert("vui lòng nhập số");
                        }
                        else
                        {
                            if($("#txtdt").val().length<10)
                            {
                                alert("không phải số điện thoại");
                            }
                            else
                            {
                               if( $("#txtdt").val().length>10)
                               {
                                alert("không phải số điện thoại");
                               }
                               else
                               {
                                   alert($("#txtdt").val());
                               }
                            }
                        }

                    }
        }
        
    });
})();