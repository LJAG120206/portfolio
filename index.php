<!DOCTYPE html>
<?php include("code.php"); ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- GOOGLE FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap"> 

    <link rel="stylesheet" href="css/styles.css">
    <script src="code.js"></script>

    <title>Porfolio d'Anthony</title>
    <!-- rafraichir la page en auto
    <meta http-equiv="refresh" content="3">-->
</head>
<body>
    <header id="header">
        <nav id="nav">
            <ul>
                <a href="#p1" id="accueil"     onclick="portfolio.planSwitch('p1');"><li>Accueil</li></a>
                <a href="#p2" id="qui"         onclick="portfolio.planSwitch('p2');"><li>Moi</li></a>
                <a href="#p3" id="competences" onclick="portfolio.planSwitch('p3');"><li>Compétences</li></a>
                <a href="#p4" id="projets"     onclick="portfolio.planSwitch('p4');"><li>Projets</li></a>
                <a href="#p5" id="contact"     onclick="portfolio.planSwitch('p5');"><li>Contact</li></a>
            </ul>
        </nav>
    </header>
    
    <hr/>

    <main id="main">

        <div class="overlay"></div>

        <!--- PAGE 1 ----------------------------> 

        <?php
            $HTML = "Anthony.className=\"WebDev\";";
            section("p1",$HTML,"Avant");
        ?>

        <!--- PAGE 2 ----------------------------> 

        <?php section("p2"); ?>

        <!--- PAGE 3 ---------------------------->

        <?php logos(); section("p3"); ?>

        <!--- PAGE 4 ----------------------------> 

        <?php section("p4","<h2>Mes projets significatifs</h2>".projets()); ?>

        <!--- PAGE 5 ----------------------------> 


        <?php
        $HTML = "
                <h2>Formulaire de contact</h2>
                <div>
                    <form id=\"formulaire\" action=\"\"  method=\"post\" novalidate>
                        <input id=\"prenom\" type=\"text\" name=\"prenom\" placeholder=\"Votre prénom\" \" required />
                        <div class=\"valid-feedback\">Looks good!</div>
                        <div id=\"validationServerUsernameFeedback\" class=\"invalid-feedback\">Entrer un prénom valide!</div>
                        <label for=\"prenom\">Votre prénom</label>
                        <input id=\"nom\" type=\"text\" name=\"nom\" placeholder=\"Votre nom\" required />
                        <label for=\"nom\">Votre nom</label>
                        <div class=\"valid-feedback\">Looks good!</div>
                        <div id=\"validationServerUsernameFeedback\" class=\"invalid-feedback\">Entrer un nom valide!</div>
                        <input id=\"mail\" type=\"email\" name=\"mail\" placeholder=\"Votre adresse e-mail\" required />
                        <label for=\"mail\">Votre adresse e-mail</label>
                        <div class=\"valid-feedback\">Looks good!</div>
                        <div id=\"validationServerUsernameFeedback\" class=\"invalid-feedback\">Entrer un prénom valide!</div>
                        <textarea id=\"textArea\" name=\"textArea\" id=\"textArea\" cols=\"20\" rows=\"6\"></textarea>
                        <label for=\"textArea\">Veuillez saisir votre message.</label>
                        <input id=\"valider\" type=\"submit\" value=\"Valider\">
                    </form>
                </div>";
        section("p5",$HTML);
        ?>
    </main>
    <script>
        portfolio.init();
    </script>
</body>
</html>