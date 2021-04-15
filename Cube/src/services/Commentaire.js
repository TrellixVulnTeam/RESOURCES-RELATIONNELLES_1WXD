import Api from './Api'
import { defineComponent } from "vue";

export default defineComponent({
    addComment (RessourceId){
        return Api().post('AddComment', RessourceId)
    },
    getAllComments(RessourceId){
        return Api().post('GetAllComment', RessourceId)
    },
    deleteComment(idComment){
        return Api().post('DeleteComment', idComment)
    }
})

