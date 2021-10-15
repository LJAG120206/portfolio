function $(id)
{
    return(document.getElementById(id));
}

function createElement(parentId, tag, id)
{
    console.log("createElement('"+parentId+"','"+tag+"','"+id+"');");

    if(!$(id))
    {
        let e = document.createElement(tag);
        e.id = id;
        $(parentId).appendChild(e);
    }
}

window.onresize = ()=>
{
    if(window.innerWidth < 640)
    {
        $('nav').style.left = "-300px";
    }
}

portfolio = 
{
    letterSpan1: "",
    letterSpan2: "",
    flagAnim : false,
    plan: "",

    init: ()=>
    { 
        console.log("portfolio.init()");

        /* --- Plan ----------------------------- */

        portfolio.plan = "p1";

        /* --- Menu ----------------------------- */

        let a = document.querySelectorAll("#nav ul a");
        a.forEach(link => 
        {
           link.setAttribute("href", "#");
        });

        /* --- Bouton du menu ------------------- */

        let e = document.createElement("img");
        e.id  = "nav_button";
        e.src = "./images/icones/menu.png";
        e.alt = "Icone de menu";
        e.onclick = portfolio.menuSwitch;
        $("header").prepend(e);

        /* --- Window -------------------------- */
        window.onresize();

        /* --- Form   -------------------------- */
        
        portfolio.formSend();
    },

    formSend: ()=>
    {
        console.log("portfolio.formCtrl();");
        $("formulaire").addEventListener("submit", function(event)
        {
            let formulaire = $("formulaire");
            event.preventDefault();
            console.log("portfolio.formSend(); + submit");

            
            // if(!formulaire.checkValidity())
            // {
            //     console.log("checkValidity");
            //     event.stopPropagation();
            // }

            
            let data = new FormData(formulaire);
            let ajax = new XMLHttpRequest();
            ajax.open("POST","back.php", true);
            ajax.onreadystatechange = ()=>
            {
                if(ajax.readyState == ajax.DONE)
                {
                    if(ajax.statusText == "OK")
                    {
                        console.log("ajax.ready");

                        if( ajax.responseText == "Votre mail a bien été expédié!")
                        {
                            console.log("test1");
                            formulaire.reset();
                            createElement("p5", "div","popup");
                            $("popup").style.width = "200px";
                            $("popup").style.height = "150px";
                            $("popup").style.position = "absolute";
                            $("popup").style.zindex = "100000";
                            $("popup").innerHTML = ajax.responseText;
                            $("popup").setAttribute("onclick", "portfolio.killElement(\"popup\");");
                        }
                        else
                        {
                            console.log("test2");
                            createElement("p5", "div","popup");
                            $("popup").style.width = "200px";
                            $("popup").style.height = "150px";
                            $("popup").style.position = "absolute";
                            $("popup").style.zindex = "100000";
                            $("popup").innerHTML = ajax.responseText;
                            $("popup").setAttribute("onclick", "portfolio.killElement(\"popup\");");
                        }
                    }
                }

            }
            ajax.send(data);
        })
    },

    killElement: (id)=>
    {
        $(id).remove();
    },

    menuSwitch: ()=>
    {
        if(window.innerWidth <= 640)
        {
            if($("nav").style.left == "-300px")
            {
                $("nav").style.left = "-50px";
            }
            else
            {
                $("nav").style.left = "-300px";
            }
        }
    },

    planSwitch: (plan)=>
    {
        console.log("portfolio.planSwitch");
        if(plan != portfolio.plan)
        {
            $(plan).className = "animationVersAvant";
            $(portfolio.plan).className = "animationVersArriere";
            portfolio.plan = plan;

            let menuItems = ['accueil','qui','competences','projets','contact'];
            menuItems.forEach(menuItem => {
                $(menuItem).parentNode.classList.remove("menuItemOn");
            });
            

            switch(plan)
            {
                case "p1" : $('accueil').parentNode.classList.add("menuItemOn"); break;
                case "p2" : $('qui').parentNode.classList.add("menuItemOn"); break;
                case "p3" : $('competences').parentNode.classList.add("menuItemOn"); break;
                case "p4" : $('projets').parentNode.classList.add("menuItemOn"); break;
                case "p5" : $('contact').parentNode.classList.add("menuItemOn"); break;
            }

            portfolio.menuSwitch();
        }
    }    
}

