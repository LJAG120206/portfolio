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

portfolio = 
{
    gestionPlan : "",
    letterSpan1 : "",
    letterSpan2 : "",

    init: ()=>
    { 
        console.log("portfolio.init()");
        portfolio.gestionPlan = "p1";

        let spanContainers = document.querySelectorAll("#container_bvn div");
        console.log(spanContainers)

        spanContainers.forEach(item => 
        {
            let letters = item.children[0].textContent.split('');
            item.children[0].innerHTML = "";

            letters.forEach((el, index) =>
            {
                item.children[0].innerHTML += '<span style ="transition-delay :'+(0.1*index)+'s">'+el+'</span>';
            })
        });

        portfolio.letterSpan1 = document.querySelectorAll("#span1 span");
        portfolio.letterSpan2 = document.querySelectorAll("#span2 span");

        //portfolio.animateTitle();
    },

    changePlan: (plan)=>
    {
        console.log("portfolio.changePlan");
        if(plan != portfolio.gestionPlan)
        {
            $(plan).className = "plan";
            $(portfolio.gestionPlan).className = "plan planAvant";
            $(plan).className = "animationVersAvant";
            $(portfolio.gestionPlan).className = "animationVersArriere";

            portfolio.gestionPlan = plan;
        }
    },

    animateTitle: ()=>
    {
        $("span2").style.transform = "translateY(-50%) rotateX(0deg)";
        portfolio.letterSpan1.forEach((lettre)=>
        {
            lettre.className = "anim1";
        });

        portfolio.letterSpan2.forEach((lettre)=>
        {
            lettre.className = "anim2";
        });

        setTimeout("portfolio.resetBvn();",4200);

    },

    resetBvn: ()=>
    {
        $("span2").style.transform = "translateY(0%) rotateX(-90deg)";
        portfolio.letterSpan1.forEach((lettre)=>
        {
            lettre.classList.remove("anim1")
        });

        portfolio.letterSpan2.forEach((lettre)=>
        {
            lettre.classList.remove("anim2");
        });




        // $("cont1").style.transition = "3s all";
        // $("cont2").style.transition = "3s all";

        // $("cont1").className = "contenant1";
        // $("cont2").className = "contenant2";

        // $("span1").innerHTML = 'Anthony.className="WebDev";';
        // $("span2").innerHTML = 'Anthony.className="WebDev";';
    }

    
}

