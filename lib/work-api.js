import { getStrapiURL } from "./api";

export async function getWorkData() {
    let url = getStrapiURL("/trabajos")
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  