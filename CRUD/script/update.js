<script type="text/javascript">

$(document).ready(function() {
   $(document).on("click",".myModal_update_a",function () {
     var id = $(this).data('id');
     var notename = $(this).data('notename');
     var notebody = $(this).data('notebody');
     var username = $(this).data('username');

     alert(id+' '+notename+' '+notebody+' '+username);

     $(".modal-body #note_id").val( id );
     $(".modal-body #note_name").val( notename );
     $(".modal-body #note_body").val( notebody );
     $(".modal-body #user_name").val( username );
     //$(".modal-body #exampleInputEmail1").val( user.password );
});
});
</script>
