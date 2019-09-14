import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333', --IOS
  // baseURL: 'http://10.0.2.2:3333', --Android Studio Emulator
  // baseURL: 'http://10.0.3.2:3333', --Genimotion
  // baseURL: 'http://<localmachineip>:3333', --Android USB
  baseURL: 'http://192.168.0.4:3333',
});

export default api;
