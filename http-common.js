import axios from "axios"

export default axios.create({
    baseURL: "https://60c01c78b8d36700175543cc.mockapi.io",
    headers: {
        "Content-type": "application/json"
    }
})