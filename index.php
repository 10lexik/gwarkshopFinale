<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr-FR">
<head>
	<meta charset="UTF-8">
	<!-- Empeche zoom arri&egrave;re sur mobiles -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
 	<title>Atelier de webdesign et graphisme - leGwarkshop - </title>
	<!-- scripts pour tout le site -->
		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
        <script type="text/javascript" src="js/modernizr.js">//Slide liens internes sans # dans l'url</script>
        <script type="text/javascript" src="js/form.js">//Slide liens internes sans # dans l'url</script>
		<script type="text/javascript" src="js/jquery.anchor.js">//Slide liens internes sans # dans l'url</script>
		
     	<link href='http://fonts.googleapis.com/css?family=Luckiest+Guy|Boogaloo' rel='stylesheet' type='text/css'>

   
   <!-- CSS maison -->   
		<link rel="stylesheet/less" type="text/css" href="css/style.less" />
		<script src="js/less.js" type="text/javascript">//decrypteur less</script>
	<!-- Les r�parations -->        
		<!-- (ie) interpretation elements html5-->
			<!--[if IE]><![endif]-->
			<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]-->
		<!--  (ie) responsive media queries -->	
			<script src="js/respond.min.js"></script>
            
            
            <script type="text/javascript">

			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', 'UA-34376839-1']);
			  _gaq.push(['_trackPageview']);
			
			  (function() {
			    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
			
</script>
</head>

<body id="accueil">
	
	<a id="toBottom"><!--scroll bottom-->
	<script type="text/javascript">//configuration anchor.js
		// the element inside of which we want to scroll
        			var $elem = $('#accueil');
	
					$('#toBottom').live('click', function() {
           			$('body').animate({scrollTop: $('#content').height()}, 1500, function(){ $('body').clearQueue(); });
     			});
	 		</script>
		<header>
			<div class="bubble arrowBottom">
				<img class="logo" src="img/logoGwarkVert.png" alt="leGwarkshop"/>               				
				<h1>Bienvenue sur
					<span><span>Le</span>GWARK!</span>
					<span>ON FAIT DES SITES WEB</span>
				</h1>              
			</div><!--bubble-->
			
			<div id="parallax">
		<!-- plan 1 -->
    		<img src="img/invisible.png" alt="" id="goku">
    		<img src="img/invisible.png" alt="" id="stylo">
            <img src="img/invisible.png" alt="" id="crayonRouge">
            <img src="img/invisible.png" alt="" id="crayonJaune1">
            <img src="img/invisible.png" alt="" id="crayonJaune2">
            
            <img src="img/invisible.png" alt="" id="ciseaux">
            <img src="img/invisible.png" alt="" id="potEncre">
            <img src="img/invisible.png" alt="" id="tasseCafe">
            <img src="img/invisible.png" alt="" id="blobCafe">
            <img src="img/invisible.png" alt="" id="gouttesCafe">
            
            <img src="img/invisible.png" alt="" id="cigarette">

            
			<!-- plan2 -->
    		<img src="img/invisible.png" alt="" id="clavier">
    		<img src="img/invisible.png" alt="" id="souris">
    		<img src="img/invisible.png" alt="" id="gouacheY">
    		<img src="img/invisible.png" alt="" id="gouacheC">
    		<img src="img/invisible.png" alt="" id="gouacheM">

    		<img src="img/invisible.png" alt="" id="stylos">
    		<img src="img/invisible.png" alt="" id="carnet">
    		<img src="img/invisible.png" alt="" id="lunettesArnaud">
    		<img src="img/invisible.png" alt="" id="lunettesGwen">
    		<img src="img/invisible.png" alt="" id="paquetClopes">
    		
            <img src="img/invisible.png" alt="" id="appareilPhoto">
			<!--<img src="img/invisible.png" alt="" id="collierGwen1">-->

			<!--plan3-->
    		<img src="img/invisible.png" alt="" id="gwen">
    		<img src="img/invisible.png" alt="" id="arnaud">
    		
    	
        	<!--plan4-->
			<!--<img src="img/invisible.png" alt="" id="collierGwen2">-->
    		<img src="img/invisible.png" alt="" id="singe">
    		<img src="img/invisible.png" alt="" id="papiers">
    		<img src="img/invisible.png" alt="" id="mario">
    		<img src="img/invisible.png" alt="" id="html5">
    		<img src="img/invisible.png" alt="" id="corbeille">
		</div>
			
		</header>
		
	</a><!--scroll bottom-->
	
	<nav class="navbar">
		<ul>
			<li><span></span><a href="web.html">Prestations</a></li>
			<li><span></span><a href="galerie.html">Galerie</a></li>
		</ul>
	</nav>
	
	<div id="content">
		<div class="wrap">
		<p class="accroche">
				<span class="accroche-line0"><span>le</span>Gwarkshop</span>
				<span class="accroche-line1">a une dinde et n'a pas peur de s'en servir!</span>
		</p>
		<img src="img/ecrans.png" alt="ecrans divers"/>	
		<p class="">Deux graphistes partagent cet atelier pour cr&eacute;er des <a href="web.html">sites internet flexibles</a> et ergonomiques, accessibles &agrave; toute r&eacute;solution.</p>
		</div>
		
    
</div><!-- /end #content -->

<footer>        		
	  <a id="contactBtn" href="mailto:arn.sider@gmail.com,gwlarcher@gmail.com"><h3>Nous contacter!</h3></a>
    
    <div id="contact-form">
		<!--[if (lt IE 9)|!(IE)]><img src="images/interface/h2_contact.png" alt="Contactez-nous!"/><![endif]-->

		<?php
		//init variables
		$cf = array();
		$sr = false;
		
		if(isset($_SESSION['cf_returndata'])){
			$cf = $_SESSION['cf_returndata'];
			$sr = true;
		}
		?>
        
        
		<ul id="errors" class="
		<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>
        ">
			<li id="info">Oups, il y a eu un petit souci:</li>
				<?php 
					if(isset($cf['errors']) && count($cf['errors']) > 0) :
						foreach($cf['errors'] as $error) :
				?>
            
			<li>
				<?php echo $error ?>
            </li>
				<?php
				endforeach;
				endif;
				?>
		</ul>
        
		<p id="success" class="
			<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>
        ">Merci! Message envoy&eacute;!</p>
        
        
		<form method="post" action="process.php">
        <section id="inlineForm">
			<label for="name">Nom: <span class="required">*</span></label>
			<input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="Peter Parker" required />
			
			<label for="email">Adresse mail: <span class="required">*</span></label>
			<input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="spiderman@exemple.com" required />
                        
            
			<label for="enquiry">Votre demande: </label>
			<select id="enquiry" name="enquiry">
				<option value="General" 
				<?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'web') ? "selected='selected'" : '' ?>>
                Site web</option>
                
				<option value="Sales" 
				<?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'illustrations') ? "selected='selected'" : '' ?>>
                Illustrations</option>
                
				<option value="Support" 
				<?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'graphisme') ? "selected='selected'" : '' ?>>
                Graphisme</option>
			</select>
            </section>
            
            
			<section id="inlineForm2">
			<label for="message">Message: <span class="required">*</span></label>
			<textarea id="message" name="message" placeholder="Votre message doit contenir plus de 20 caractères" required data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
            
            <span id="puce"></span>
			
			<span id="loading"></span>
			<input type="submit" value="Envoyer!" id="submit-button" />
			<p id="req-field-desc"><span class="required">*</span> Champs obligatoires</p>
            </section>
		</form>
		
		
		
		<?php unset($_SESSION['cf_returndata']); ?>	
		
		
		            
	</div><!-- /end #contact-form -->
    
<script>
	if (!Modernizr.input.placeholder){
	$('input[placeholder], textarea[placeholder]').placeholder();
	}
</script>
</footer>

</body>
</html>

<!-- TODO :

Accents ???? 
NAV : remettre gradient vertical dans boutons, remettre icones au hover
Nettoyer appels fontes google dans les heads, selon besoins de chaque page

Accueil
	Caler image ecrans en dessous de 320 
	
Web 
	bubble.mobile / bubble.desktop � 768px;

-->