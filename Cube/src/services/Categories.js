import Api from './Api'

export default {
    AddCategories (name){
        return Api().post('addCategorie', name)
    },
    GetAllCategories (){
        return Api().post('GetAllCategories')
    },
    DeleteCategories (id){
        return Api().post('DeleteCategorie', id)
    },
    EditCategories (id){
        return Api().post('EditCategorie', id)
    },
    getOneCategorie(id){
        return Api().post('getOneCategorie', id)
    }
}

