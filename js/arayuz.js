 //Arayuzu Baslat
 var fcArayuz;

 function Arayuz() {

     document.getElementById("arayuz").style.display = "block";
     document.getElementById("gir").style.display = "none"
     document.getElementById("altalan").style.display = "none"
     var userr = document.getElementById("username").value
     document.getElementById("name").innerHTML = "Merhaba " + userr;
     Area.start();
 }

 var Area = {
     canvas: document.createElement("canvas"),
     start: function() {
         this.canvas.width = window.innerWidth;
         this.canvas.height = window.innerHeight;
         this.context = this.canvas.getContext("2d");
         document.getElementById("myCanvas").insertBefore(this.canvas, document.getElementById("myCanvas").childNodes[0]);
         this.interval = setInterval(updateArea, 20);
         window.addEventListener('resize', function() {
             Area.canvas.width = window.innerWidth;
             Area.canvas.height = window.innerHeight;
         });
     },
     clear: function() {
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }
 }

 function updateArea() {
     Area.clear();
     fcArayuz.speedX = 0;
     fcArayuz.speedY = 0;
     if (Area.keys && Area.keys[37]) {
         fcArayuz.speedX = -2;
     }
     if (Area.keys && Area.keys[39]) {
         fcArayuz.speedX = 2;
     }
     if (Area.keys && Area.keys[38]) {
         fcArayuz.speedY = -2;
     }
     if (Area.keys && Area.keys[40]) {
         fcArayuz.speedY = 2;
     }
     fcArayuz.newPos();
     fcArayuz.update();
 }