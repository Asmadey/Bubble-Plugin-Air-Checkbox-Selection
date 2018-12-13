function(instance, properties, context) {
  instance.data.group_id = properties.group_id;
  $(document).ready(function (){
    $('#'+properties.group_id).checkboxes('range', true);
  })
 

}