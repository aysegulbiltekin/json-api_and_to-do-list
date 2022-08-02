const table = document.getElementById("userTable");

function getUserList(){

    fetch("https://reqres.in/api/users")
    .then(response=>response.json())  //ayiklanmis json verileri geldi
    .then(data=>{        //ayiklanmis json verileri geldikten sonra bazi islemler yapacagim
       // console.log(data)
        for(user of data.data ) //arraylerin degerlerini yazdirirken for of kullaniliyor
        {
           // console.log(user);
            table.innerHTML+=`
            <tr>
                <td>
                  <input type="text" class="form-control" id="" value="${user.first_name}"required>
                </td>
                <td>
                  <input type="text" class="form-control" id="" value="${user.last_name}"required>
                </td>
                <td>
                  <input type="email" class="form-control" id="" value="${user.email}"required>
                </td>
                <td>
                  <a href="" class="btn btn-warning" onclick="updateUser(${user.id})">Güncelle</a>
                  <a href="" class="btn btn-danger" onclick=deleteUser(${user.id})>Sil</a>
                </td>
              </tr> `
        }
    })
}
getUserList();


/* Kullanici olustur */

function createUser(){
    let data={
        first_name: document.getElementById("first_name").value || "Değer Yok",
        last_name:document.getElementById("last_name").value ||"Değer Yok",
        email:document.getElementById("email").value ||"Değer Yok"
    };

    
    // if(first_name=="" || last_name=="" || email==""){
    //     ui.uyari("Boş alan bırakmayınız ! ,hata")
    // }
    
    fetch("https://reqres.in/api/users",{
        method:"POST", //karsi tarafa birsey gondermek icin burada Post metodu kullandik
        headers:{
            'Content-Type':'application/json' //icerik tipi gonderecegim veri json demek istedik
        },
        body:JSON.stringify(data) //ne ve nasil bir veri gonderecegimizi bize gelen datayi stringe cevirerek gondermis olduk 
    }) 
    .then(response=>response.json())
    .then(data=>{

        console.log(data);
        table.innerHTML+=`
        <tr>
        <td>
         `/*burada id kisminda getUserList e erisecegimiz icin id atamasi yaptik 
                first_name den sonra her birinin kendi id sini getirmesini istedigimiz icin ${user.id} yazmaliyiz.
                */
        `
          <input type="text" class="form-control" id="" value="${data.first_name}" required>
        </td>
        <td>
          <input type="text" class="form-control" id="" value="${data.last_name}"required>
        </td>
        <td>
          <input type="email" class="form-control" id="" value="${data.email}"required>
        </td>
        <td>
          <a href="" class="btn btn-warning" onclick="updateUser(${data.id})">Güncelle</a>
          <a href="" class="btn btn-danger" onclick=deleteUser(${data.id})>Sil</a>
        </td>
      </tr>
        `
    })
    

    
}

//Bosluk kontrolu saglama


