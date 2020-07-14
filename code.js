(function(){

  document.getElementById("btn").onclick=()=>{
        var today = new Date().getFullYear();
        var birthday=new Date(document.getElementById("btdate").value).getFullYear();
        alert(today-birthday);
    };
    $("#btdate").focus(()=>{
        $("#btdate").css("background-color", "yellow");
    });
    $("#btdate").blur(()=>{
        $("#btdate").css("background-color", "blue");
    });
})();