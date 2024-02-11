let dataG= [];

        function tampilkanData() {
            var taskList = document.getElementById("taskList");
            taskList.innerHTML = ""; // Menghapus isi sebelum menambahkan elemen baru
            for (let i = 0; i < dataG.length; i++) {
                var tampil = document.createElement("li");

                var delet = document.createElement("button"); //tombol hapus
                delet.innerHTML="Delet";
                delet.className="delet";

                tampil.appendChild(document.createTextNode(dataG[i]));
                taskList.appendChild(tampil);
                
                tampil.appendChild(delet);
            }
        }

function BacaInput(event) {
    event.preventDefault();// karena button submit ketika di kli akan merefresh gunkaanini agar data tidak hilang.
    let data = document.getElementById("task").value.trim(); //kesalahan di "" huruf s dan 
   
    // var li = document.createElement("li");
    // li.appendChild(document.createTextNode(data));
    // taskList.appendChild(li); ///TAMBAHKAN FORM

    if (data.length===0) {
        alert("data kosong");
    }
        dataG.push(data);
        tampilkanData();
        console.log(dataG);
    
}

// Mendapatkan referensi ke formulir dan menambahkan event listener untuk menangani submit
document.getElementById("form").addEventListener("submit", BacaInput);

function Coret(s) {
    
    
}

var deleta = document.getElementsByClassName("delet");
var i;
for (i = 0; i < deleta.length; i++) {
  deleta[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
