// src/config.js
export const BASE_URL = 'https://v2.jkt48connect.com/api';

export const ENDPOINTS = {
  MEMBERS: '/jkt48/members',
  BIRTHDAY: '/jkt48/birthday',
  EVENTS: '/jkt48/events',
  RECENT: '/jkt48/recent',
  REPLAY: '/jkt48/replay',
  RECENT_DETAIL: (liveId) => `/jkt48/recent/${liveId}`,
  LIVE: '/jkt48/live',
  LIVE_YOUTUBE: '/jkt48/live/youtube',
  YOUTUBE: '/jkt48/youtube',
  LIVE_IDN: '/jkt48/live/idn',
  LIVE_SHOWROOM: '/jkt48/live/showroom',
  MEMBER_DETAIL: (name) => `/jkt48/member/${encodeURIComponent(name)}`,
  NEWS: '/jkt48/news',
  NEWS_DETAIL: (id) => `/jkt48/news/${id}`,
  THEATER: '/jkt48/theater',
  THEATER_DETAIL: (id) => `/jkt48/theater/${id}`,
  CHAT_STREAM: (username, slug) => `/jkt48/chat-stream?username=${encodeURIComponent(username)}&slug=${encodeURIComponent(slug)}`,
  CHAT_STREAM_SR: (roomId) => `/jkt48/chat-stream-sr?room_id=${encodeURIComponent(roomId)}`,
  CHECK: '/zenova/check',
  VIDEO_CALL: (sesi = '', date = '', member = '') => {
    let endpoint = `/jkt48/videocall`;
    const params = [];
    if (sesi) params.push(`sesi=${encodeURIComponent(sesi)}`);
    if (date) params.push(`date=${encodeURIComponent(date)}`);
    if (member) params.push(`member=${encodeURIComponent(member)}`);
    return params.length ? `${endpoint}?${params.join('&')}` : endpoint;
  },
  VIDEO_CALL_TODAY: '/jkt48/videocall/today'
};
