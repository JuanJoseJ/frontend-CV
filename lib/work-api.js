export async function getWorkData() {
    const res = await fetch("http://localhost:8001/trabajos");
    const data = await res.json();
    return data;
  }
  