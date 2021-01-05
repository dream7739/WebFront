import http from './http'; //http 클래스 불러옴

export default {
  async getMainSlideBanners() {
    return http.get('api/banner.json'); //async 비동기 함수
  }
}