<?php

function section($p,$HTML="",$anim='Arriere')
{
    print("<hr/>\n");
    print("<section class=\"animationVers$anim\" id=\"$p\">\n");

    // Image :D
    if(file_exists("pages/$p/illustration.jpg"))
    {
        $txt = (file_exists("pages/$p/illustration.txt")) ? file_get_contents("pages/$p/illustration.txt") : "";

        print("  <div class=\"illustration\" style=\"background-image: url(pages/$p/illustration.jpg);\" alt=\"".$txt."\"></div>\n");
    }
    
    print("  <div class=\"page\">\n");

    // HTML :)
    if($HTML != "")
    {
        print($HTML);
    }

    // Fichiers HTML :o
    $dir   = "pages/$p";
    $files = scandir($dir);
    foreach($files as $file)
    {
        $f_ = explode('.',$file);
        $f  = $f_[0];
        $e  = (count($f_) > 1) ? $f_[1] : "";
        if($file != '.' && $file != '..' && $e == 'html')
        {
            print("      <div id=\"$f\">".file_get_contents("./pages/$p/$file")."</div>\n");
        }
    }


    print("  </div>\n");
    print("</section>\n");
}

function projets()
{
    $dir = "pages/p4/projets";
    $projets = scandir($dir);
    $HTML = "";
    foreach($projets as $p)
    {
        if($p != '.' && $p != '..' && is_dir("$dir/$p"))
        {
            $HTML .= "<hr/>\n";
            $HTML .= "<article class=\"card\">\n";
            $HTML .= "<img src=\"pages/p4/projets/$p/illustration.png\" alt=\"".file_get_contents("pages/p4/projets/$p/illustration.txt")."\">\n";
            $HTML .= file_get_contents("pages/p4/projets/$p/description.html");
            $HTML .= "</article>\n";
        }
    }
    return($HTML);
}

function logos()
{
    $dir = "images/logos";
    $logos = scandir($dir);
    $HTML = "<div class=\"logos\" alt=''>";
    $delete = [];

    foreach($logos as $logo)
    {
        $f = explode(".", $logo)[0];
        $e = explode(".", $logo)[1];
        
        if($e == "png" || $e == "jpg")
        {
            $HTML .= "<img src=\"images/logos/$logo\" alt=\"".file_get_contents("images/logos/$f.txt")."\">";
        }
        
        if($f == "logos")
        {
            array_push($delete, $logo);
        }
    }
    $HTML .= "</div>";

    $fmd5 = "pages/p3/logos.".md5($HTML).".html";
    if(!file_exists($fmd5))
    {
        $dir = "pages/p3";
        $logos = scandir($dir);
        
        foreach($logos as $l)
        {
            $f = explode(".", $l)[0];
            if($f == "logos")
            {
                unlink("pages/p3/$l");
            }
        }
        file_put_contents($fmd5,$HTML);
    }
    
}