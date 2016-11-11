package quiz3

class Usuario {

        String nombre
        String apellido
        String cedula
        String email
        Date fechaDeNacimiento
        static hasMany = [eventos: Evento]
        static constraints = {
            nombre(blank: false)
            apellido(blank: false)
            cedula(blank: false)
            email(blank: false)
            fechaDeNacimiento(blank: false)
        }

}
