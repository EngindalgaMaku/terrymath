  document.addEventListener("DOMContentLoaded", () => {
    const blo = document.getElementsByClassName("yeşilbuton")[1]; 
    const blo1 = document.getElementsByClassName("yeşilbuton")[0]; 
    const q = document.getElementsByClassName("sorubölmü")[0];
    const e = document.getElementsByClassName("sorubölmü")[1];
    const timeElem = document.getElementsByClassName("zaman")[0];
    const p1 = document.getElementsByClassName("sayaç")[0];
    const p2 = document.getElementsByClassName("sayaç")[2];
    const ser1 = document.getElementsByClassName("sayaç")[1];
    const ser2 = document.getElementsByClassName("sayaç")[3];
    let time = 180;
    let bVal = 0;
    let dVal = 0;
    let currentId = null;
    let puan1 = 0;
    let puan2 = 0;
    let seri1 = 0;
    let seri2 = 0;
    timeElem.style.setProperty("--width", 97);
    function map(value, in_min, in_max, out_min, out_max) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    
    blo.addEventListener("click", () => {
      timeElem.style.setProperty("--width", 97);
      function a() {
        bVal = Math.floor(Math.random() * 100)-49;
        dVal = Math.floor(Math.random() * 100)-49;

        q.innerHTML = "(" + String(bVal) + ") + (" + String(dVal) + ")";
        e.innerHTML = "(" + String(bVal) + ") + (" + String(dVal) + ")";

        currentId = Math.floor(Math.random() * 3);
        let cvp = bVal + dVal;
        document.getElementsByClassName("butonlar")[currentId].textContent = String(cvp);
        document.getElementsByClassName("butonlar")[currentId+3].textContent = String(cvp);  

        const optionIds = [0, 1, 2];

        optionIds.forEach(nu => {
          const el = document.getElementsByClassName("butonlar")[nu];
          const mel = document.getElementsByClassName("butonlar")[nu+3];  
          if (nu == currentId || nu == currentId + 3) {
              return;
          }
          let ran = Math.floor(Math.random() * 200)-99; 
          function dene(){
            ran = Math.floor(Math.random() * 200)-99; 
          }
          while (ran == cvp){
            dene();
          }
          el.textContent = ran;
          mel.textContent = ran;
        })
        p1.textContent ="puan:" +String(puan1);
        p2.textContent = "puan:" +String(puan2);
        ser1.textContent = "seri:"+ String(seri1);
        ser2.textContent = "seri:"+ String(seri2);
    }
      document.getElementsByClassName("sekşın")[0].style.display = "block";
      document.getElementsByClassName("anasayfa")[0].style.display = "none";
      a();

      const timer = setInterval(function() {
        time--;
        let mep = map(time,0,180,0,97)
        timeElem.style.setProperty("--width", mep);
        if (time <= 0) {
          clearInterval(timer);
          document.getElementsByClassName("sekşın")[0].style.display = "none";
          document.getElementsByClassName("kazanan")[0].style.display = "block";
          document.getElementById("bitiş").play()
          if(puan1 < puan2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 2"
          }else if(puan1 == puan2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="DOSTLUK"
          }else{
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 1"
          }
          time = 180;
          bVal = 0;
          dVal = 0;
          currentId = null;
          puan1 = 0;
          puan2 = 0;
          seri1 = 0;
          seri2 = 0;
        }
      }, 1000);
      [0,3,1,4,2,5].forEach(num => {
      const el = document.getElementsByClassName("butonlar")[num]
      el.addEventListener("click", function() { 
        const allah = document.getElementById("kazanma")
        const ses = document.getElementById("kaybetme");
        if (String(currentId) === String(num)) {
         allah.play()
          puan1 += 10 + seri1;
          seri1 ++;
          a();
          
        }else if(String(currentId+3) === String(num)){
          allah.play()
          puan2 += 10 +seri2;
          seri2 ++;
          a()

        }else if(num <= 5 && num >= 3){
          puan2 -= 5;
          seri2 = 0;
          a();
          ses.play()
          e.style.setProperty("color","red")
          setTimeout(function(){
              e.style.setProperty("color","var(--yazılar)")
          }, 1000);  
        }else if(num <= 2 && num >= 0){
          puan1 -= 5;
          seri1 = 0;
          a();
          ses.play()
          q.style.setProperty("color","red")
          setTimeout(function(){
              q.style.setProperty("color","var(--yazılar)")
          }, 1000);
        }
      });
    });
    });
    blo1.addEventListener("click", () => {
      timeElem.style.setProperty("--width", 97);
      function a() {
        bVal = Math.floor(Math.random() * 100)+1;
        dVal = Math.floor(Math.random() * 100)+1;

        q.textContent = "(" + String(bVal) + ") + (" + String(dVal) + ")";
        e.textContent = "(" + String(bVal) + ") + (" + String(dVal) + ")";

        currentId = Math.floor(Math.random() * 3);
        let cvp = bVal + dVal;
        document.getElementsByClassName("butonlar")[currentId].textContent = String(cvp);
        document.getElementsByClassName("butonlar")[currentId+3].textContent = String(cvp);  

        const optionIds = [0, 1, 2];

        optionIds.forEach(nu => {
          const el = document.getElementsByClassName("butonlar")[nu];  
          const mel = document.getElementsByClassName("butonlar")[nu+3];  
          if (nu == currentId) {
              return;
          }
          let ran = Math.floor(Math.random() * 200)+1; 
          function dene(){
            ran = Math.floor(Math.random() * 200)+1; 
          }
          while (ran == cvp){
            dene();
          }
          el.textContent = ran;
          mel.textContent = ran;
        })
        p1.textContent ="puan:" +String(puan1);
        p2.textContent = "puan:" +String(puan2);
        ser1.textContent = "seri:"+ String(seri1);
        ser2.textContent = "seri:"+ String(seri2);
    }
      document.getElementsByClassName("sekşın")[0].style.display = "block";
      document.getElementsByClassName("anasayfa")[0].style.display = "none";
      a();

      const timer = setInterval(function() {
        time--;
        let mep = map(time,0,180,0,97)
        timeElem.style.setProperty("--width", mep);
        if (time <= 0) {
          clearInterval(timer);
          document.getElementsByClassName("sekşın")[0].style.display = "none";
          document.getElementsByClassName("kazanan")[0].style.display = "block";
          document.getElementById("bitiş").play()
          if(puan1 < puan2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 2"
          }else if(puan1 == puan2){
            document.getElementsByClassName("söyleleş")[0].innerHTML ="DOSTLUK"
          }else{
            document.getElementsByClassName("söyleleş")[0].innerHTML ="OYUNCU 1"
          }
          time = 180;
          bVal = 0;
          dVal = 0;
          currentId = null;
          puan1 = 0;
          puan2 = 0;
          seri1 = 0;
          seri2 = 0;
        }
      }, 1000);
      [0,3,1,4,2,5].forEach(num => {
      const el = document.getElementsByClassName("butonlar")[num]
      el.addEventListener("click", function() { 
        const allah = document.getElementById("kazanma")
        const ses = document.getElementById("kaybetme");
        if (String(currentId) === String(num)) {
         allah.play()
          puan1 += 10 + seri1;
          seri1 ++;
          a();
          
        }else if(String(currentId+3) === String(num)){
          allah.play()
          puan2 += 10 +seri2;
          seri2 ++;
          a()
        }else if(num <= 5 && num >= 3){
          puan2 -= 5;
          seri2 = 0;
          a();
          ses.play()
          e.classList.add("kırmızı")
          e.style.setProperty("color","red")
          setTimeout(function(){
              e.style.setProperty("color","var(--yazılar)")
          }, 1000);
          
        }else if(num <= 2 && num >= 0){
          puan1 -= 5;
          seri1 = 0;
          a();
          ses.play()
          q.style.setProperty("color","red")
          setTimeout(function(){
              q.style.setProperty("color","var(--yazılar)")
          }, 1000);
        }
      });
    });
    });
  });