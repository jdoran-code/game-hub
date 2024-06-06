import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ca875f100fef4b1bb334491cc74820e3"
    }
})