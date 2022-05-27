fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(response => response.json())
  .then(data => cars(data));


  function cars (data) {
      for (i = 0; i< data.length; i++){
        //   console.log(data[i].nome)
      let h1 = document.createElement("li")
    //   let h2 = document.createElement("li")
        //   document.write (data[i].nome)
        h1.textContent = data[i].nome + ":" + " " + data[i].codigo
        // h2.textContent = data[i].codigo

        document.body.append(h1)
      }
  }
  