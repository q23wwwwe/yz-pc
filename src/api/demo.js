// import api from './api'

export const fetchDemo = async () => {
    // const result = await api.get('/demo')
    let result={
        data:{
            name:"张三",
            age:24,
            sex:"男",
        }
    }
    return result.data
  }