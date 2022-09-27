$(document).ready (function(){
    $("#signup-form").validate({
        rules:{
            textname:{
                required:true,
                minlength:4
            },
            mailtext:{
                required:true,
                
                email:true

            },

        }
    })
})

