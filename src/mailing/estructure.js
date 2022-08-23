class mailStructure {
  constructor(to) {
    (this.from = '"MusiCommerce Store" <musicommercestore@gmail.com>'),
      (this.to = to),
      (this.subject = ""),
      (this.text = ""),
      (this.html = "");
  }
  setTo(data) {
    this.to = data;
  }
  setSubject(data) {
    this.subject = data;
  }
  setText(data) {
    this.text = data;
  }
  setHtmlRegister(userName, password) {
    this.html = `
    <div>
            <h1>Bienvenid@ a MusiCommerce</h1>
            <div>
              <h3>Este es un resumen de tu información</h3>
              <ul>
                <li>Username: ${userName}</li>
                <li>Password: ${password}</li>
              </ul>
            </div>
            <a href="https://www.google.com">Ir a Musiccomerce</a>
    </div>`;
  }
  setHtmlShop(name, phone, address, city, country, zip, total, items) {
    this.html = `
    <h2 style="color:#2B4570">RESUMEN DE TU COMPRA</h2>
    </br>
    <div>
      <h3 style="color:#2B4570">DATOS DE ENVÍO</h3>
      </p>
      <p><b style="color:#5497A7">Nombre: </b>${name}</p>
      <p><b style="color:#5497A7">Telefono: </b>${phone}</p>
      <p><b style="color:#5497A7">Dirección: </b>${address}</p>
      <p><b style="color:#5497A7">Ciudad: </b>${city}</p>
      <p><b style="color:#5497A7">Pais: </b>${country}</p>
      <p><b style="color:#5497A7">Zip: </b>${zip}</p>
    </div>
    </br>
    </br>
    <div>
      <h3 style="color:#2B4570">PRODUCTOS</h3>
      <div>${items.map(
        (e) =>
          `<img src= ${e.img} style= "height:150px" "width=150px"/>
        <p><b style="color:#5497A7">Instrumento:</b> ${e.name}</p>
        <p><b style="color:#5497A7">Unidades:</b> ${e.count}</p>
        <p><b style="color:#5497A7">Precio Unitario:</b> $${e.price}</p>
        `
      )}
      </div>
    </div>
    </br>
    </br>
    <h2 style="color:#2B4570"> Toal pagado: $${total}</h2>`;
  }

  setHtmlUpdate(
    //userName,
    //password,
    firstName,
    lastName,
    contactNumber,
    buyerAddress
  ) {
    this.html = `
    <div>
            <h1 style="color:#2B4570">HAS ACTUALIZADO TU PERFIL</h1>
            <div>
              <h3 style="color:#2B4570" >Este es un resumen de tus cambios</h3>
              <ul>
                <P><b style="color:#5497A7">Nombre</b>: ${firstName}</P>
                <P><b style="color:#5497A7">Apellido:</b> ${lastName}</P>
                <P><b style="color:#5497A7">Numero de contacto:</b> ${contactNumber}</P>
                <P><b style="color:#5497A7">Direccion:<b> ${buyerAddress}</P>
              </ul>
            </div>
    </div>`;
  }

  setNewsletter(email) {
    this.html = `
    <div>
      <h1 style="color:#2B4570">Gracias por tu suscripción a MusiCommerce</h1>
      <h3>Te mantendremos informad@</h3>
      <p>${email}</p>
    </div>
    `;
  }

  setResetPassword(email, token) {
    this.html = `
    <div>
      <h1 style="color:#2B4570">CAMBIO DE CONTRASEÑA</h1>
      <h3 style="color:#2B4570" >Has solicitado un cambio de cotraseña desde tu correo ${email}</h3>
      <h3>Da click en el siguiente enlace:</h3>
      <p>http://localhost:3000/user/resetpassword</p>
    </div>
    `;
  }

  setPassReseted(pass) {
    this.html = `
  <div>
    <h1 style="color:#2B4570">Cambio de contraseña exitoso</h1>
    <h4>Esta es tu nueva constraseña: </h4>
    <p>${pass}</p>
  </div>
  `;
  }
}

module.exports = mailStructure;