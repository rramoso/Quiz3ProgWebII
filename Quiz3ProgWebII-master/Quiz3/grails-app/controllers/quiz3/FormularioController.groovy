package quiz3

class FormularioController {

    def formulario(String cedulaUsuario, String, String nombreEvento){ //La forma recomendada...
        println("Matricula recuperada $cedulaUsuario")
        if(!cedulaUsuario){
            flash.error2="Debe especificar la matricula"
            redirect(action: "index")
        }else{

            def usuario=Usuario.findByCedula(cedulaUsuario)
            def evento=Evento.findByNombre(nombreEvento)


            if(!usuario || !evento){ //en Groovy, el valor null de frente considerado falso.
                flash.error="No existe la matricula indicada"
                redirect(action: "index")
                return;
            }else {
                usuario.addToEventos(evento).save()
                render(view: "index", model: [estudiante2: estudiante])
            }
        }
    }
    def index() { }
}
