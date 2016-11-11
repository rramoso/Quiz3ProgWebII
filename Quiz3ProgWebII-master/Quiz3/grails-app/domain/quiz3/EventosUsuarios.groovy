package quiz3

class EventosUsuarios implements Serializable{

    static EventosUsuarios create(Usuario usuario, Evento evento){
        new EventosUsuarios(usuario: usuario, evento: evento).save(flush: true);
    }
    static constraints = {
    }

    static mapping = {
        table 'usuario_eventos'
        id composite: ['usuario', 'evento']
        version(false) //eliminando el campo de versiones...
    }
}
