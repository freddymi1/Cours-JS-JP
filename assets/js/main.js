window.addEventListener('load', horlogue);
function horlogue() {
    let date = new Date();
    document.getElementById('heure').innerHTML = date.toLocaleTimeString();
    setTimeout(horlogue, 1000);
}

document.addEventListener('DOMContentLoaded', function(){
    let cacher = document.getElementById('cacherBtn');
    cacher.addEventListener('click', toggleBtn);
    function toggleBtn(){
        let params = document.getElementById('tog');
        params.style.transition == 'all .4s ease';
        if(params.style.opacity == '1'){
            params.style.opacity = '0';
        }else{
            params.style.opacity = '1';
        }
    }
})