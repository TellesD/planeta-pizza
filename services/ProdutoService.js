import http from "../http-common"

const get = async () => {
   try{ return http.get("/produto")
}catch{
    alert('erro na requisição')
}
}

const create = async (data) => {
   try{ return http.post("/produto", data)
}catch{
    alert('erro na requisição')
}
}

const update = async (id, data) => {
    try{  return http.put(`/produto/${id}`, data)
}catch{
    alert('erro na requisição')
}
}

const remove = async (id) => {
    try{ return http.delete(`/produto/${id}`)
}catch{
    alert('erro na requisição')
}
}
export default {
    get,
    create,
    update, 
    remove
}