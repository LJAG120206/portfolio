<?php

if($_POST["prenom"] != "" && $_POST["nom"] != "" && $_POST["mail"] != "")
{
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $mail = $_POST["mail"];
    $text = $_POST["textArea"];
    $flag = FALSE;
    $retour = "";

    foreach($_POST as $value)
    {
        if($value == "")
        {
            $flag = TRUE;
            $retour = "Merci de remplir les champs manquants!";
            break;
        }
        elseif(!filter_var($mail, FILTER_VALIDATE_EMAIL))
        {
            $flag = TRUE;
            $retour = "Format email incorrect (exemple: anthony@corgier.fr)!";
            break;
        }
    }

    if($flag == FALSE)
    {
        $to = "acprofessionnel2507@gmail.com";
        $subject ="Formulaire de ".$prenom." ".$nom.".";
        $message = $text;
        $headers = "From: ".$mail."\r\n".
        "Cc: ".$mail."\r\n".
        "X-Mailer : PHP/".phpversion();
        
        mail($to, $subject, $message, $headers);
        $retour = "Votre mail a bien été expédié!";
        print($retour);
    }
    else
    {
        print($retour);
    }
}


//     if($prenom == "")
//     {
//         $controleForm = TRUE;
//         break;
//     }

//     if(preg_match("/[a-zA-Z]/", $nom))
//     {
//         $controleForm .= "nom-";
//     }

//     if(filter_var($mail, FILTER_VALIDATE_EMAIL))
//     {
//         $controleForm .= "mail";
//     }

//     if($controleForm == "ok: prenom-nom-mail")
//     {
//         //faire la fonction mail + print("mailOk);
//     }



// }
// else
// {
//     print("champsManquants");
// }

?>