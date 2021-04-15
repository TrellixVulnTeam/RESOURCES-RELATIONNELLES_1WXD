import Api from './Api'

export default {
    addRessource(data){
        return Api().post('addResource', data)
    },
    getRessources(){
        return Api().post('getAllResources')
    },
    getOneRessource(id){
        return Api().post('getOneResource', id)
    },
    getUserRessources(){
        return Api().post('getUserResources')
    },
    deleteRessource(id){
        return Api().post('deleteResource', id)
    },
    updateRessource(data){
        return Api().post('editResource', data)
    },
    RessourceByCat(NomCat){
        return Api().post('ResourceByCat', NomCat)
    },
}

