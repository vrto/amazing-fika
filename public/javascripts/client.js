function send(){
  $.ajax({
      url: '/pairs', 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify({number:1})}
  )
}