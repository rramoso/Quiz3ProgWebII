package quiz3

class Evento {

        String nombre
        Date fechaInicio
        Date fechaFin
        Usuario usuario
        static hasMany = [usuarios: Usuario]
        static belongsTo = Usuario
        static constraints = {
            nombre(unique: true, blank: false)
            fechaInicio(blank: false)
            fechaFin(blank: false)
        }

}
