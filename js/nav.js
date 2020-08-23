
    function closeNav(){
      $('.popup-overlay').css({'display':'none'},500)
      $('#mySidepanel').animate({ 'padding': '0', 'width': '0' }, 500)
      $('.closebtn').animate({'opacity':'0'})
    }

    function openNav(){
      // $('#mySidepanel').css("width","auto").css("padding","20");
      $('.popup-overlay').css({'display':'block'})
      $('#mySidepanel').animate({ 'padding': '20px', 'width': '321.81px' }, 500)
      $('.closebtn').animate({'opacity':'1'},500)
    }

    function showSignUpPage(){
      $('.signup').css({'display':'block'});
      $('.login').css({'display':'none'});
    }

    function showLoginPage(){
      $('.signup').css({'display':'none'});
      $('.login').css({'display':'block'});
    }