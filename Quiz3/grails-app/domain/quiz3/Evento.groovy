package quiz3

class Evento {

        String nombre
        Date fechaInicio
        Date fechaFin

        static belongsTo = [usuario:Usuario]
        static constraints = {
            nombre(blank: false)
            fechaInicio(blank: false)
            fechaFin(blank: false)
        }

}
