
$('.navbar a').click(function(e){
    e.preventDefault()
    let pages = $(this).attr('href')
    $('.out').load(pages)
   

})

 localStorage.setItem('mode','dark')


$('.toggle').click(function(){
    $('body').toggleClass('dark')
    
        $('a').toggleClass('white')
    
})





