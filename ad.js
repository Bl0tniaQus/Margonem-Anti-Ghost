function st(k)
{
    let kpr = new KeyboardEvent('keypress', {'keyCode':k, 'which':k});
    document.dispatchEvent(kpr);
    document.dispatchEvent(kpr);
    document.removeEventListener('keypress');

}
function Mv()
{
    let sts = Math.floor(Math.random() * 8 ) + 4;
    for(let i=1;i<=sts;i++)
    {
        let k = 37 + Math.floor(Math.random() * 4 );
        st(k);
    }
}
let loading = document.documentElement.innerHTML;
setTimeout(function(){
if (loading.includes('<div id="panel">')) {return;}
       let t=Math.random()*1500 + 1000;
       setTimeout(function(){window.location.reload();},t)
},3000);


setInterval(function()
{
    let msg = document.getElementById("dazed").innerHTML;
    let con = document.getElementById("console").innerHTML;
    if (con.includes("Warning"))
   {
       let t=Math.random()*1500 + 1000;
       setTimeout(function(){window.location.reload();},t)
   }
    if (hero.stasis == 1 && !g.battle && !g.dead) {
        let t=Math.random()*5000 + 1000;

        setTimeout(Mv,t);


   }
   if (msg.includes("Zostałeś wylogowany z powodu braku aktywności."))
   {
       let t=Math.random()*3000 + 1000;
       setTimeout(function(){window.location.reload();},t)
   }



},1000);
