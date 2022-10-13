export const API_URL = "https://nf-api.onrender.com";
export const API_DATABASE = "/api/v1";
export const API_DATABASE_SOCIAL = "/social";
export const API_SOCIAL_URL = `${API_URL}${API_DATABASE}${API_DATABASE_SOCIAL}`;
export const postsURLDesc = `${API_URL}${API_DATABASE}${API_DATABASE_SOCIAL}/posts?_author=true&sort=created&sortOrder=desc`;
export const postsURLAsc = `${API_URL}${API_DATABASE}${API_DATABASE_SOCIAL}/posts?_author=true&sort=created&sortOrder=asc`;