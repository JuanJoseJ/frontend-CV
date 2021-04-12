import { getStrapiURL } from "./api";

export async function getStudiesData() {
  let url = getStrapiURL("/estudios")
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
