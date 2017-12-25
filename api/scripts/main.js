function loadItems() {
    $.ajax({
        url: "/app/main.php"
    })
    .done(function( data ) {
        console.log( data );
    });
}