const API_ROOT = "https://social-nodejs-api.herokuapp.com/api/v1";

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  register: () => `${API_ROOT}/users/register`,
  fetchPosts: () => `${API_ROOT}/posts`,
  signup: () => `${API_ROOT}/users/register`,
  newPost: () => `${API_ROOT}/posts/create`,
  likePost: (postId) => `${API_ROOT}/posts/${postId}/like`,
  addComment: () => `${API_ROOT}/comments/create`,
  detailPost: (postId) => `${API_ROOT}/posts/${postId}`,
};