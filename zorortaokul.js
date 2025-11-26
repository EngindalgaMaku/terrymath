document.addEventListener("DOMContentLoaded", ()=>{
  const buton2 = document.getElementsByClassName("kırmızıbuton")[1]
  const buton1 = document.getElementsByClassName("kırmızıbuton")[0]
  const sekment = document.getElementsByClassName("sekşın")[0]
  const soru2 = document.getElementsByClassName("sorubölmü")[1]
  const soru1 = document.getElementsByClassName("sorubölmü")[0]
  const timeElem = document.getElementsByClassName("zaman")[0]
  let islem = Math.floor(Math.random()*4)+1
  let zamn = 180;
  let ney = 0;
  let d1 = 0;
  let d2 = 0;
  let cvp = 0;
  let butid = 0;
  let p2 = 0;
  let p1 = 0;
  let ser1 = 0;
  let ser2 = 0;
  const seri1 = document.getElementsByClassName("sayaç")[1]
  const seri2 = document.getElementsByClassName("sayaç")[3]
  const butons = [0,1,2,3,4,5]
  timeElem.style.setProperty("--width", 97);
  function map(value, in_min, in_max, out_min, out_max) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
  buton2.addEventListener("click", ()=>{
    timeElem.style.setProperty("--width",97);
    sekment.style.display = "block";
    document.getElementsByClassName("anasayfa")[0].style.display = "none";
    function a(){
      butid = Math.floor(Math.random()*3) ;
      if(islem == 1){
        d1 = Math.floor(Math.random()*100)-49;
        d2 = Math.floor(Math.random()*100)-49;
        cvp = d1 + d2;
        soru1.innerHTML = "("+String(d1)+") + ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") + ("+String(d2)+")";
        ney = 1;
      }else if(islem == 2){
        d1 = Math.floor(Math.random()*100)-49;
        d2 = Math.floor(Math.random()*100)-49;
        cvp = d1 - d2;
        soru1.innerHTML = "("+String(d1)+") - ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") - ("+String(d2)+")";
        ney = 1;
      }else if(islem == 3){
        d1 = Math.floor(Math.random()*100)-49;
        d2 = Math.floor(Math.random()*20)-9;
        cvp = d1*d2;
        soru1.innerHTML = "("+String(d1)+") * ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") * ("+String(d2)+")";
        ney = 2;
      }else if(islem == 4){
        d2 = Math.floor(Math.random()*20)-9;
        while(d2 == 0){
          d2 = Math.floor(Math.random()*20)-9;
        }
        cvp = Math.floor(Math.random()*20)-9;
        while(cvp == 0){
          cvp = Math.floor(Math.random()*20)-9;
        }
        d1 = d2 * cvp;
        soru1.innerHTML = "("+String(d1)+") / ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") / ("+String(d2)+")";
        ney = 3;
      }
      const birumut = [0,1,2]
      birumut.forEach(f=>{
        let sey = document.getElementsByClassName("butonlar")[f]
        let mey = document.getElementsByClassName("butonlar")[f+3]
        let randd = 0;
        if (sey.id === String(butid) || sey.id === String(butid + 3)) {
            return;
        }
        if(ney == 1){
          randd = Math.floor(Math.random()*100)-49;
          while(cvp == randd){
            randd = Math.floor(Math.random()*20)+9
          }
        }else if(ney == 2){
          randd = Math.floor(Math.random()*1000)-499;
          while(cvp == randd){
            randd = Math.floor(Math.random()*20)+9
          }
        }else if(ney == 3){
          randd = Math.floor(Math.random()*20)+9
          while(cvp == randd){
            randd = Math.floor(Math.random()*20)+9
          }
        }
        sey.innerHTML = String(randd)
        mey.innerHTML = String(randd)
      })
      document.getElementsByClassName("butonlar")[butid].innerHTML = String(cvp);
      document.getElementsByClassName("butonlar")[butid+3].innerHTML = String(cvp);
      document.getElementsByClassName("sayaç")[0].innerHTML = "puan:"+ String(p1)
      document.getElementsByClassName("sayaç")[2].innerHTML = "puan:"+ String(p2) 
      islem = Math.floor(Math.random()*4)+1;  
      seri1.innerHTML = "seri:" + ser1
      seri2.innerHTML = "seri:" + ser2
    }
    a()
      const timer = setInterval(function() {
        zamn--;
        let mep = map(zamn,0,180,0,97)
        timeElem.style.setProperty("--width", mep);
        if (zamn <= 0) {
          clearInterval(timer);
          document.getElementsByClassName("kazanan")[0].style.display = "block";
          sekment.style.display = "none";
          document.getElementById("bitiş").play()
          if(p1 < p2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 2"
          }else if(p1 == p2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="DOSTLUK"
          }else{
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 1"
          }
          zamn = 180;
          d2 = 0;
          d1 = 0;
          butid = 0;
          p1 = 0;
          p2 = 0;
          ser1 = 0;
          ser2 = 0;
        }
      }, 1000);

    butons.forEach(g=>{
      const seyim = document.getElementsByClassName("butonlar")[g]
      const ses = document.getElementById("kaybetme")
      const ses2 = document.getElementById("kazanma")
      
      seyim.addEventListener("click",function(){
        if(g === butid){
          ses2.play();
          p1 += 10 + ser1;
          ser1 += 1;
          a();
        }else if(g === butid+3){
          ses2.play();
          p2 += 10 + ser2;
          ser2 += 1;
          a();
        }else if(g >= 0 && g <=2){
          ses.play()
          soru1.style.setProperty("color","red")
          setTimeout(function(){
              soru1.style.setProperty("color","var(--yazılar)")
          }, 1000);
          ser1 = 0;
          p1 -= 5;
          a();
        }else if(g >= 3 && g <=5){
          ses.play()
          ser2 = 0;
          soru2.style.setProperty("color","red")
          setTimeout(function(){
              soru2.style.setProperty("color","var(--yazılar)")
          }, 1000);
          p2 -= 5;
          a();
        }
      })
    })
  })
  buton1.addEventListener("click", ()=>{
    timeElem.style.setProperty("--width", 97);
    sekment.style.display = "block";
    document.getElementsByClassName("anasayfa")[0].style.display = "none";
    function a(){
      butid = Math.floor(Math.random()*3) ;
      if(islem == 1){
        d1 = Math.floor(Math.random()*100)+1;
        d2 = Math.floor(Math.random()*100)+1;
        cvp = d1 + d2;
        soru1.innerHTML = "("+String(d1)+") + ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") + ("+String(d2)+")";
        ney = 1;
      }else if(islem == 2){
        d1 = Math.floor(Math.random()*100)+1;
        d2 = Math.floor(Math.random()*d1)+1;
        cvp = d1 - d2;
        soru1.innerHTML = "("+String(d1)+") - ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") - ("+String(d2)+")";
        ney = 1;
      }else if(islem == 3){
        d1 = Math.floor(Math.random()*50)+1;
        d2 = Math.floor(Math.random()*10)+1;
        cvp = d1*d2;
        soru1.innerHTML = "("+String(d1)+") * ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") * ("+String(d2)+")";
        ney = 2;
      }else if(islem == 4){
        d2 = Math.floor(Math.random()*20)+1;
        while(d2 == 0){
          d2 = Math.floor(Math.random()*50)+1;
        }
        cvp = Math.floor(Math.random()*10)+1;
        while(cvp == 0){
          cvp = Math.floor(Math.random()*20)+1;
        }
        d1 = d2 * cvp;
        soru1.innerHTML = "("+String(d1)+") / ("+String(d2)+")";
        soru2.innerHTML = "("+String(d1)+") / ("+String(d2)+")";
        ney = 3;
      }
      console.log(butid)
      
      butons.forEach(f=>{
        let sey = document.getElementsByClassName("butonlar")[f]
        let mey = document.getElementsByClassName("butonlar")[f]
        let randd = 0;
        if (sey.id === String(butid) || sey.id === String(butid + 3)) {
            return;
        }
        if(ney == 1){
          randd = Math.floor(Math.random()*100)+1;
          while(cvp == randd){
            randd = Math.floor(Math.random()*100)+1;
          }
        }else if(ney == 2){
          randd = Math.floor(Math.random()*500)+1;
          while(cvp == randd){
            randd = Math.floor(Math.random()*500)+1;
          }
        }else if(ney == 3){
          randd = Math.floor(Math.random()*20)+1
          while(cvp == randd){
            randd = Math.floor(Math.random()*20)+1
          }
        }
        sey.innerHTML = String(randd)
        mey.innerHTML = String(randd)
      })
      document.getElementsByClassName("butonlar")[butid].innerHTML = String(cvp);
      document.getElementsByClassName("butonlar")[butid+3].innerHTML = String(cvp);
      document.getElementsByClassName("sayaç")[0].innerHTML = "puan:"+ String(p1)
      document.getElementsByClassName("sayaç")[2].innerHTML = "puan:"+ String(p2) 
      islem = Math.floor(Math.random()*4)+1;  
      seri1.innerHTML = "seri:" + ser1
      seri2.innerHTML = "seri:" + ser2
    }
    a()
      const timer = setInterval(function() {
        zamn--;
        let mep = map(zamn,0,180,0,97)
        timeElem.style.setProperty("--width", mep);
        if (zamn <= 0) {
          clearInterval(timer);
          document.getElementsByClassName("kazanan")[0].style.display = "block";
          sekment.style.display = "none";
          document.getElementById("bitiş").play()
          if(p1 < p2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 2"
          }else if(p1 == p2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="DOSTLUK"
          }else{
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 1"
          }
          zamn = 180;
          d2 = 0;
          d1 = 0;
          butid = 0;
          p1 = 0;
          p2 = 0;
          ser1 = 0;
          ser2 = 0;
        }
      }, 1000);

    butons.forEach(g=>{
      const seyim = document.getElementsByClassName("butonlar")[g]
      const ses = document.getElementById("kaybetme")
      const ses2 = document.getElementById("kazanma")
      seyim.addEventListener("click",function(){
        if(g === butid){
          ses2.play();
          p1 += 10 + ser1;
          ser1 += 1;
          a();
        }else if(g === butid+3){
          ses2.play();
          p2 += 10 + ser2;
          ser2 += 1;
          a();
        }else if(g >= 0 && g <=2){
          ses.play()
          soru1.style.setProperty("color","red")
          setTimeout(function(){
              soru1.style.setProperty("color","var(--yazılar)")
          }, 1000);
          ser1 = 0;
          p1 -= 5;
          a();
        }else if(g >= 3 && g <=5){
          ses.play()
          ser2 = 0;
          soru2.style.setProperty("color","red")
          setTimeout(function(){
              soru2.style.setProperty("color","var(--yazılar)")
          }, 1000);
          p2 -= 5;
          a();
        }
      })
    })
  })
})
