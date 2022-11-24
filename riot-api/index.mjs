// Returns string[] with 0 index being latest version
const versionResponse = await fetch(
  'https://ddragon.leagueoflegends.com/api/versions.json'
);
const versionData = await versionResponse.json();

// Use name field to get champion name
const championRes = await fetch(
  `http://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/en_US/champion.json`
);

const championData = await championRes.json();

const skinPicRes = await fetch(
  'https://raw.communitydragon.org/latest/game/assets/characters/aatrox/skins/skin01/aatroxloadscreen_1.png'
);

const skinPicData = await skinPicRes.blob();

const img = URL.createObjectURL(skinPicData);
document.querySelector('img').setAttribute('src', img);
