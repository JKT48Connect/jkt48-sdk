import ApiClient from './api-client.js';
import { ENDPOINTS } from './config.js';

class JKT48 {
  constructor(auth = null) {
    this.client = new ApiClient(auth);
  }

  // Member related methods
  async members() {
    return await this.client.request(ENDPOINTS.MEMBERS);
  }

  async getAllMembers() {
    return await this.members();
  }

  async memberDetail(name) {
    return await this.client.request(ENDPOINTS.MEMBER_DETAIL(name));
  }

  async getMemberDetail(name) {
    return await this.memberDetail(name);
  }

  async birthday() {
    return await this.client.request(ENDPOINTS.BIRTHDAY);
  }

  // Live related methods
  async live() {
    return await this.client.request(ENDPOINTS.LIVE);
  }

  async getLive() {
    return await this.live();
  }

  async liveYoutube() {
    return await this.client.request(ENDPOINTS.LIVE_YOUTUBE);
  }

  async liveIdn() {
    return await this.client.request(ENDPOINTS.LIVE_IDN);
  }

  async liveShowroom() {
    return await this.client.request(ENDPOINTS.LIVE_SHOWROOM);
  }

  async youtube() {
    return await this.client.request(ENDPOINTS.YOUTUBE);
  }

  // Recent and Replay
  async recent() {
    return await this.client.request(ENDPOINTS.RECENT);
  }

  async recentDetail(liveId) {
    return await this.client.request(ENDPOINTS.RECENT_DETAIL(liveId));
  }

  async replay() {
    return await this.client.request(ENDPOINTS.REPLAY);
  }

  // Events
  async events() {
    return await this.client.request(ENDPOINTS.EVENTS);
  }

  async getEvents() {
    return await this.events();
  }

  // Theater
  async theater() {
    return await this.client.request(ENDPOINTS.THEATER);
  }

  async getTheater() {
    return await this.theater();
  }

  async theaterDetail(id) {
    return await this.client.request(ENDPOINTS.THEATER_DETAIL(id));
  }

  async getTheaterDetail(id) {
    return await this.theaterDetail(id);
  }

  // News
  async news() {
    return await this.client.request(ENDPOINTS.NEWS);
  }

  async newsDetail(id) {
    return await this.client.request(ENDPOINTS.NEWS_DETAIL(id));
  }

  // Video Call
  async videoCall(sesi = '', date = '', member = '') {
    return await this.client.request(ENDPOINTS.VIDEO_CALL(sesi, date, member));
  }

  async videoCallToday() {
    return await this.client.request(ENDPOINTS.VIDEO_CALL_TODAY);
  }

  // Chat Stream
  async chatStream(username, slug) {
    return await this.client.request(ENDPOINTS.CHAT_STREAM(username, slug));
  }

  async chatStreamSr(roomId) {
    return await this.client.request(ENDPOINTS.CHAT_STREAM_SR(roomId));
  }

  // Check API
  async check() {
    return await this.client.request(ENDPOINTS.CHECK);
  }

  async checkApiKey() {
    return await this.check();
  }
}

export default JKT48;
