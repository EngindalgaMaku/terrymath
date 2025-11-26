document.addEventListener("DOMContentLoaded", () => {
    const tus = document.getElementsByClassName("kırmızıbuton")[2];
    const soruilk = document.getElementsByClassName("sorubölmü")[0];
    const soruiki = document.getElementsByClassName("sorubölmü")[1]
    let pay1;//payda
    let pay2;//payda
    let seçilen;
    let payda1;//pay
    let payda2;//pay
    let üst2;
    let üst1;
    let cvppay;
    let cvppayda;
    let rand;
    tus.addEventListener("click", () => {
        document.getElementsByClassName("sekşın")[0].style.display = "block";
        document.getElementsByClassName("anasayfa")[0].style.display = "none";
        
        function a(){ 
            let alt;
            rand = Math.floor(Math.random()*3)+1
            if(1 == rand){
                pay1 = Math.floor(Math.random()*10)+2;
                payda1 = Math.floor(Math.random()*pay1-1)+1;
                pay2 = Math.floor(Math.random()*10)+2;
                payda2 = Math.floor(Math.random()*pay2)+1;
            }else if(2 == rand){
                pay1 = Math.floor(Math.random()*10)+2;
                payda1 = Math.floor(Math.random()*10)+10
                pay2 = Math.floor(Math.random()*10)+2;
                payda2 = Math.floor(Math.random()*10)+10
            }else if(3 == rand){
                const sayılar = [3,4,5,10,20,25,50,9]
                seçilen = sayılar[Math.floor(Math.random()*8)]
                pay1 = seçilen
                payda1 = Math.floor(Math.random()*seçilen)
                seçilen = sayılar[Math.floor(Math.random()*8)]
                pay2 = seçilen
                payda2 = Math.floor(Math.random()*seçilen)
            }
            const işlem = Math.floor(Math.random()*4)+1
            let işleming
            if(işlem == 1){
                işleming = "+"
                üst1 = payda1
                üst2 = payda2
                alt = pay1
                if(pay1 != pay2){
                    alt  = pay1 * pay2;
                    üst1 = pay1 *payda2
                    üst2 = payda1 *pay2
                }
                cvppay = üst1 + üst2
                cvppayda = alt
            }
            if(işlem == 2){
                işleming = "-"
                üst1 = payda1
                üst2 = payda2
                alt = pay1
                if(pay1 != pay2){
                    alt  = pay1 * pay2;
                    üst1 = pay1 *payda2
                    üst2 = payda1 *pay2
                }
                cvppay = üst1 - üst2
                cvppayda = alt
            }
            if(işlem == 3){
                işleming = "*"
                alt  = pay1 * pay2;
                üst1 = payda1 *payda2
                cvppay = üst1
                cvppayda = alt

            }
            if(işlem == 4){
                işleming = "/"
                alt  = pay1 * payda2;
                üst1 = payda1 *pay2
                cvppay = üst1
                cvppayda = alt
            } 
            soruilk.innerHTML = '<span class="fraction"><sup>'+payda1+'</sup><sub>'+pay1+'</sub></span> '+işleming+' <span class="fraction"><sup>'+payda2+'</sup><sub>'+pay2+'</sub></span>'
            soruiki.innerHTML = '<span class="fraction"><sup>'+payda1+'</sup><sub>'+pay1+'</sub></span> '+işleming+' <span class="fraction"><sup>'+payda2+'</sup><sub>'+pay2+'</sub></span>'
        }
        let randomdogru = Math.floor(Math.random()*3)
        console.log(randomdogru)
        a()
        let dogrubuton = document.getElementsByClassName("butonlar")[randomdogru]
        dogrubuton.innerHTML = '<span class="kesircvp"><sup>'+cvppay+'</sup><sub>'+cvppayda+'</sub></span>'
        document.getElementsByClassName("butonlar")[randomdogru+3].innerHTML = '<span class="kesircvp"><sup>'+cvppay+'</sup><sub>'+cvppayda+'</sub></span>'
        const list = [0,1,2,3,4,5]
        list.forEach(element => {
            if (randomdogru ==element){
                return
            }
            const payim = Math.floor(Math.random()*cvppayda)+1
            document.getElementsByClassName("butonlar")[element].innerHTML = '<span class="kesircvp"><sup>'+payim+'</sup><sub>'+cvppayda+'</sub></span>'
        });
    })
})