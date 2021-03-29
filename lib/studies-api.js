export async function getStudiesData() {
  const res = await fetch("http://localhost:8001/estudios");
  const data = await res.json();
  return data;
}
