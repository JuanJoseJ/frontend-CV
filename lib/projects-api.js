export async function getProjectsData() {
    const res = await fetch("https://api.github.com/users/JuanJoseJ/repos");
    const data = await res.json();
    return data;
  }