import { Constants } from "../utils/constants";

//metodos: index, show,update,store,destroy
/*
index: listagem de sessoes
store: Criar uma sessao
show: Quando queremos listar uma unica sessao
update: quando queremos alterar uma sessao
destroy: Quando queremos deletar uma sessao
*/

class SessionController{

    store(req, res){
        return res.json({message: Constants.Success});
    }

}

export default new SessionController;