/*Shows/hides the documentation.
Used jQuery because it can easily change 
values in the css stylesheet*/
$(document).ready(function() {
    $("#doc-button").click(function() {
        $(this).text(function(i, text) {
            return text == "Vis dokumentasjon" ? "Skjul dokumentasjon" : "Vis dokumentasjon";
        });

        let x = document.getElementById("doc-text");
        if(window.getComputedStyle(x).display === "none") {
            $("#doc-text").css("display", "block");
        } else {
            $("#doc-text").css("display", "none");
        };
    });
});