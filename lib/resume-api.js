export async function getResumeData() {
  const data = {};
  const studies = await fetch("http://localhost:8001/estudios");
  const education = await fetch("http://localhost:8001/trabajos");
  data.studies = await studies.json();
  data.education = await education.json();
  return data;
}
