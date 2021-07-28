// esta Funcion permite que se ejecute el carrusel, una vez se mnuestra y desaperece una imagen, llama a la siguiente a que haga lo mismo
// y asi sucesivamente luego se reinicia nuevamente sin mostrar el logo inicial desde el principio
// escala para carruseles pequeños ya que va anidado

function carousel (){
    $("#imgLogo").delay(2700).fadeOut("fast")

    $("#img1").delay(3000).fadeIn("fast").delay(2500).fadeOut("fast",()=>{
        $("#img2").fadeIn("fast").delay(2500).fadeOut("fast",()=>{
            $("#img3").fadeIn("fast").delay(2500).fadeOut("fast",()=>{
                $("#img4").fadeIn("fast").delay(2500).fadeOut("fast",()=>{
                    $("#img5").fadeIn("fast").delay(2500).fadeOut("fast")
                    carousel()
                })
            })
        })
    })
}

carousel()