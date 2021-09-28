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

    init: ()=>
    { 
        console.log("portfolio.init()");
        portfolio.gestionPlan = "p1";

        portfolio.animateTitle();
        setInterval('portfolio.animateTitle();', 7000);
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


            //setTimeout("$('"+plan+"').className = 'animation3';", 4001);
            //setTimeout("$('"+portfolio.gestionPlan+"').className = 'plan';", 4001);

            //setTimeout("$(plan).className = 'plan planAvant';", 4001);


            portfolio.gestionPlan = plan;
        }
    },

    animateTitle: ()=>
    {

        

        let spanContainers = document.querySelectorAll("#container_bvn div");

        spanContainers.forEach(item => 
        {
            let letters = item.children[0].textContent.split('');
            item.children[0].innerHTML = "";

            letters.forEach((el, index) =>
            {
                item.children[0].innerHTML += '<span style ="transition-delay :'+(0.1*index)+'s">'+el+'</span>';
            })
        });

        $("cont1").className = "anim1";
        $("cont2").className = "anim2";

        setTimeout("portfolio.resetBvn();",3500);

    },

    resetBvn: ()=>
    {0

        $("cont1").className = "contenant1";
        $("cont2").className = "contenant2";

        $("span1").innerHTML = 'Anthony.className="WebDev";';
        $("span2").innerHTML = 'Anthony.className="WebDev";';
    }

    
}
