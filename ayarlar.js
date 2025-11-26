document.addEventListener("DOMContentLoaded", ()=>{
    const ses = document.querySelectorAll("audio")
    const kontrol = document.getElementById("sesayarı");
    const kontrol1 = document.getElementsByClassName("dark")[0];
    function map(value, in_min, in_max, out_min, out_max) {
      return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    if(localStorage.getItem("ses") == null){
        localStorage.setItem("ses",0.5)
    }
    kontrol.value = map(localStorage.getItem("ses"),0,1,0,100)
    ses.forEach(element => {
            element.volume = localStorage.getItem("ses")
        });
    kontrol.addEventListener("input", ()=>{
        let ayarlı = map(kontrol.value,0,100,0,1)
        ses.forEach(element => {
            element.volume = ayarlı
            localStorage.setItem("ses",ayarlı)
        });
    }) 

    let bool = false;
    if(localStorage.getItem("darkmode") == "true"){
        document.body.classList.add("darkmode");
        bool = true
    }else{
        bool = false
        document.body.classList.remove("darkmode");
    }
    kontrol1.addEventListener("click", ()=>{
        if(bool == false){
            localStorage.setItem("darkmode", true)
            document.body.classList.add("darkmode");
            bool = true
        }else if(bool == true){
            localStorage.setItem("darkmode", false)
            document.body.classList.remove("darkmode");
            bool = false
        }
    })
})
