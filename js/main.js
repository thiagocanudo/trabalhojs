
$(document).ready(function(){

    /*SUBMENU SERVIÇOS*/
    var $btPortifolio = $('#head ul li#servicos > a');
    var $subMenu = $('#head ul li#servicos ul');

    $btPortifolio.click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('active');

        if($btPortifolio.hasClass('active')){
            $subMenu.fadeTo("fast", 1);
        }else{
            $subMenu.fadeTo("fast", 0);
        }        
    });

    $subMenu.click(function(e){
        e.stopPropagation();
    });

    $('body').click(function(){
        $btPortifolio.removeClass('active')
        $subMenu.fadeTo("fast", 0); 
    });

    /*MOSAICO PORTFOLIO*/
    var sites = $('.projetos .sites');
    var hotsites = $('.projetos .hotsites');
    var lojasvirtuais = $('.projetos .lojasVirtuais');
    var logomarcas = $('.projetos .logomarcas');
    var $btSites = $('#ultimosProjetos #btSites');
    var $btHotsites = $('#ultimosProjetos #btHotsites');
    var $btLojasvirtuais = $('#ultimosProjetos #btLojasVirtuais');
    var $btLogomarcas = $('#ultimosProjetos #btLogomarcas');
    var $btTodos = $('#ultimosProjetos #btTodos');
    
    $btSites.click(function(e){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
        sites.fadeTo(750, 10);
        hotsites.fadeTo(500, 0.1);
        lojasvirtuais.fadeTo(500, 0.1);
        logomarcas.fadeTo(500, 0.1);
    });    
    
    $btHotsites.click(function(e){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
        sites.fadeTo(500, 0.1);
        hotsites.fadeTo(750, 10);
        lojasvirtuais.fadeTo(500, 0.1);
        logomarcas.fadeTo(500, 0.1);
    });

    $btLojasvirtuais.click(function(e){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
        sites.fadeTo(500, 0.1);
        hotsites.fadeTo(500, 0.1);
        lojasvirtuais.fadeTo(750, 10);
        logomarcas.fadeTo(500, 0.1);
    });

    $btLogomarcas.click(function(e){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
        sites.fadeTo(500, 0.1);
        hotsites.fadeTo(500, 0.1);
        lojasvirtuais.fadeTo(500, 0.1);
        logomarcas.fadeTo(750, 10);
    });

    $btTodos.click(function(e){
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        e.preventDefault();
        sites.fadeTo(500, 1);
        hotsites.fadeTo(500, 1);
        lojasvirtuais.fadeTo(500, 1);
        logomarcas.fadeTo(500, 1);
    });

    /*formulario de contato*/
    var $form = $('#pagContato form');
    var $btEnviar = $form.find('#btEnviar')
    var $nome = $form.find('#nome');
    var $email = $form.find('#email');
    var $assunto = $form.find('#assunto');
    var $mensagem = $form.find('#mensagem');
    var $check = $('<img>').attr('src', 'https://cdn1.iconfinder.com/data/icons/diagona/icon/16/102.png');

    $btEnviar.click(function(){
        /*VALIDA NOME*/
        if( $nome.val() == '' ){
            $('#nome').addClass('error');
            $('#erro_nome').text('preencha o campo nome');
        }else if( $nome.val().length <= 5 ){
            $('#erro_nome').text('seu nome deve ter ao menos 6 caracters');
        }else{
            $('#nome').removeClass('error');
             $('#erro_nome').text('');
             $('#erro_nome').html($check);
        }
        /*VALIDA EMAIL*/
        if( $email.val() == '' ){
            $('#email').addClass('error');
            $('#erro_email').text('preencha o campo email');
        }else{
            var email = $email.val();
            var emailValido=/^.+@.+\..{2,}$/;
            if(!emailValido.test(email))
            {
                $('#erro_email').text('Email inválido!');
            }else{
                $('#email').removeClass('error');
                $('#erro_email').text('');
                $('#erro_email').html($check);
            }
        }
        /*VALIDA ASSUNTO*/
        if( $assunto.val() == '' ){
            $('#assunto').addClass('error');
            $('#erro_assunto').text('preencha o campo assunto');
        }else if( $assunto.val().length <= 5 ){
            $('#erro_assunto').text('Assunto com ao menos 6 caracters');
        }else{
            $('#assunto').removeClass('error');
             $('#erro_assunto').text('');
             $('#erro_assunto').html($check);
        }
        /*VALIDA MENSAGEM*/
        if( $mensagem.val() == '' ){
            $('#mensagem').addClass('error');
            $('#erro_mensagem').text('preencha o campo mensagem');
        }else if( $mensagem.val().length < 20 ){
            $('#erro_mensagem').text('mensagem com ao menos 20 caracters');
        }else{
            $('#mensagem').removeClass('error');
             $('#erro_mensagem').text('');
             $('#erro_mensagem').html($check);
        }
    });

    /*VALIDAÇÃO CADASTRO DE NEWSLETTER*/
    var $formNews = $('#links form');
    var $btEnviarNews = $formNews.find('#btEnviarNews')
    var $nomeNews = $formNews.find('#news_nome');
    var $emailNews = $formNews.find('#news_email');

    $btEnviarNews.click(function(){
        /*VALIDA NOME*/
        if( $nomeNews.val() == '' ){
            alert('Preencha o campo nome');
        }else if( $nomeNews.val().length <= 5 ){
            alert('O campo nome deve ter ao menos 6 caracteres');
         }else if ( $emailNews.val() == '' ){
            alert('Preencha o campo email');
        }else{
            var email = $emailNews.val();
            var emailValido=/^.+@.+\..{2,}$/;
            if(!emailValido.test(email))
            {
                alert('Email inválido!');
            }
        }
    });  

    /*contador de caracteres*/
    var $textarea = $('#pagContato form textarea');
    var $contador = $('.count strong');
    var $maximo = 100;
    $contador.text($maximo);

    $textarea.bind("input keyup paste", function(){
        var $digitados = $(this).val().length;
        var $disponivel = $maximo - $digitados;
        if($disponivel < 0){
            var texto = $(this).val().substr(0, $maximo);
            $(this).val(texto);
            $disponivel = 0;
        }
        $contador.text($disponivel);
    });


});

