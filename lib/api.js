export function getStrapiURL(path = "") {
  let url = `${process.env.STRAPI_URL || "http://localhost:8001"}${path}`;
  return url;
}
