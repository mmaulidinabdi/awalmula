let skorComp = 0;
let skorPlayer = 0;


function pilihanComputer() {
    let comp = Math.random();

    if (comp < 0.34) return 'gajah';
    else if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';

}

function hasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}


function putar(){
    let imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang']
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai >1000){
            clearInterval;
            return;
        } 
        imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
        if( i == gambar.length) i = 0;
    },100)
};

let pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){

    let pilComp = pilihanComputer();
    let pilPlayer = pil.className

    let hasilnya = hasil(pilComp, pilPlayer);
    // console.log('hasil :', hasilnya);

    putar();

    setTimeout(function(){
        
        //Ganti Gambar computer
        let gambarComp = document.querySelector('.img-komputer');
        gambarComp.setAttribute('src', 'img/' + pilComp + '.png');

        
        //tampilkan hasil ditengah
        let tempatHasil = document.querySelector('.info');
        tempatHasil.innerHTML = hasilnya;

 
        if(hasilnya == 'MENANG'){
             skorPlayer++;
        } else if(hasilnya == 'KALAH'){
             skorComp++;
        }
        
        
        let a = document.getElementById('skorComputer').textContent = skorComp;

        let b = document.getElementById('skorPlayer').textContent = skorPlayer;
        

    },1000);

    })

})





