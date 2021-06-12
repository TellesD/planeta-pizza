import http from "../http-common"
const get = async () => {
   try{ return http.get("/compra")
}catch{
    alert('erro na requisição')
}
}

const create = async (data) => {
   try{ return http.post("/compra", data)
}catch{
    alert('erro na requisição')
}
}

const update = async (id, data) => {
    try{  return http.put(`/compra/${id}`, data)
}catch{
    alert('erro na requisição')
}
}

const remove = async (id) => {
    try{ return http.delete(`/compra/${id}`)
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