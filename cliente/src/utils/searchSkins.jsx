export default async function searchSkins(setSkins, setSkinsFilter) {
  try {
    const response = await fetch('http://localhost:3000/skins');
    const data = await response.json();
    setSkins(data.data);
    setSkinsFilter(data.data);
  } catch (error) {
    console.error(error);
    alert('Error when searching for skins.');
  }
};