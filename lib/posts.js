// lib/posts.js
import GhostContentAPI from "@tryghost/content-api";
// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://bmac-dev-blog.herokuapp.com", // Replace with your URL
  key: "64ad59b03c24403e355702c965", // Replace with your Content Key
  version: "v3",
});
// Grab all of our posts from Ghost
export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
// Grab each individual post from Ghost
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
