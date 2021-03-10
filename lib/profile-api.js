export async function getProfileData() {
  const res = await fetch("http://localhost:8001/perfil");
  const data = await res.json();
  return data;
}
