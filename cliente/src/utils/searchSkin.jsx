export default async function searchSkins(setSkin, id) {
  try {
    const response = await fetch(`http://localhost:3000/skins/${id}`);
    const data = await response.json();
    setSkin(data.data[0]);
    return data.data[0];
  } catch (error) {
    console.error(error);
    alert('Error when searching for skins.');
  }
};