import api from '../lib/axios';

export default{
    obtenerClientes() {
        return api.get('/clientes');
    },
    agregarCliente(cliente) {
        return api.post('/clientes', cliente);
    },
    obtenerClientePorID(id){
        return api.get(`/clientes/${id}`);
    },
    actualizarCliente(id, datosActualizados) {
        return api.patch(`/clientes/${id}`, datosActualizados);
    }
}