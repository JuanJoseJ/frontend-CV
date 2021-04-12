import { getStrapiURL } from "./api";

export async function getProfileData() {
  let url = getStrapiURL("/perfil")
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
