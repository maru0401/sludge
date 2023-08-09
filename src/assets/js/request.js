import axios from "axios";
import { setupCache } from 'axios-cache-interceptor';
const Axios = axios.create({
  baseURL: "https://admin.activated-sludge.xyz/api",
  headers: {
    Authorization: `Bearer 9696ee29d9b3c57339fd3cc4dd76084197ed4af2ab48e4f8cd5234e911ac83aa85fe3c67d6c285ea595e05342b97e35f7db981c3fe97ac7c010e26a8004a1f1e85af095f835ce320b2f7b2d2e57814762fe61fa4967688e270caf2b377b073dd81933f42066789c890d0b519d7586381dff7d75c54d9a4ac24d2bbc05779633c`,
  },
});
const instance = setupCache(Axios);

export default instance;
