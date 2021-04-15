import Api from './Api'

export default {
    AddTypeOfRessource (name){
        return Api().post('addTypeOfResource', name)
    },
    GetAllTypeOfRessource (){
        return Api().post('GetAllTypeOfResource')
    },
    DeleteTypeOfRessource (id){
        return Api().post('DeleteTypeOfResource', id)
    },
    EditTypeOfRessource (id){
        return Api().post('EditTypeOfResource', id)
    },
    getOneTypeOfRessource(id){
        return Api().post('getOneTypeOfResource', id)
    }
}

