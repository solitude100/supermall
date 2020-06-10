import axios from 'axios'


export function request(config) {
  // 创建一个axios实例
  const instance=axios.create({
    baseURL:"http://152.136.185.210:8000/api/n3",
    timeout:5000
  });

  // 拦截器

  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
    
  })


  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
    
  })
  // 返回创建的实例

  return instance(config)
}

