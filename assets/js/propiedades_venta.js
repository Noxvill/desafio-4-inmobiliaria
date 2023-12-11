// arreglo con propiedades en venta

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: "Apartamento de lujo en zona exclusiva",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Cabaña acogedora en el bosque",
    src: "https://huilohuilo.com/content/uploads/2019/06/Cabañas-del-bosque-e1559768027436.jpg",
    descripcion:
      "Cómoda y acogedora cabaña en medio del bosque, cuenta con comodidades básicas para disfrutar de un hermoso tiempo de desconexión",
    ubicacion: "Sector Santa Lucía Alto, km 33, Yungay, Ñuble",
    habitaciones: 2,
    baños: 2,
    costo: 3000,
    smoke: true,
    pets: false,
  },
];

// Función para renderizar las propiedades

const rendersellproperties = () => {
  const divVenta = document.getElementById("venta");

  propiedades_venta.forEach((propiedades_venta) => {
    if (propiedades_venta.smoke) {
      smk =
        "<p class='text-success'>" +
        "<i class='fas fa-smoking'>" +
        "</i>" +
        " " +
        "Permitido Fumar" +
        "</p>";
    } else {
      smk =
        "<p class='text-danger'>" +
        "<i class='fas fa-smoking-ban'>" +
        "</i>" +
        " " +
        "No Permitido Fumar" +
        "</p>";
    }

    if (propiedades_venta.pets) {
      pts =
        "<p class='text-success'>" +
        "<i class='fas fa-paw'>" +
        "</i>" +
        " " +
        "Se Permiten mascotas" +
        "</p>";
    } else {
      pts =
        "<p class='text-danger'>" +
        "<i class='fa-solid fa-ban'>" +
        "</i>" +
        " " +
        "No se Permiten mascotas" +
        "</p>";
    }

    divVenta.innerHTML +=
      "<div class='row'>" +
      "<div class='col-md-4 mb-4'>" +
      "<div class='card'>" +
      "<img src=" +
      propiedades_venta.src +
      " class='card-img-top' alt='Imagen del departamento'/>" +
      "<div class='card-body'>" +
      "<h5 class='card-title'>" +
      propiedades_venta.nombre +
      "</h5>" +
      "<p class='card-text'>" +
      propiedades_venta.descripcion +
      "</p>" +
      "<i class='fas fa-map-marker-alt'>" +
      "</i>" +
      "<p>" +
      propiedades_venta.ubicacion +
      "</p>" +
      "<p>" +
      "<i class='fas fa-bed'>" +
      "</i>" +
      " " +
      propiedades_venta.habitaciones +
      " " +
      "habitaciones" +
      " " +
      "|" +
      " " +
      "<i class='fas fa-bath'>" +
      "</i>" +
      " " +
      propiedades_venta.baños +
      " " +
      "baños" +
      "</p>" +
      "<p>" +
      "<i class='fas fa-dollar-sign'>" +
      "</i>" +
      propiedades_venta.costo +
      "</p>" +
      smk +
      pts +
      "</div>" +
      "</div>";
  });
};

rendersellproperties();
