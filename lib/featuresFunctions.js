import fs from 'fs';

const folderNameToPrettyName = folderName => {
  const result = folderName.replace(/([A-Z])/g, ' $1');
  const result2 = result.replace(/([1-9])/g, ' $1');
  return result2.charAt(0).toUpperCase() + result2.slice(1);
};

const folderNameToKebabCaseName = folderName => {
  const one = folderName.replace(/([A-Z])/g, '-$1').toLowerCase();
  return one.replace(/([1-9])/g, '-$1').toLowerCase();
};

export const getFeaturesPreview = async () => {
  const folders = fs.readdirSync('./public/features');
  const featuresPreview = folders.map(folderName => ({
    image: `/features/${folderName}/${folderName}Thumbnail.png`,
    name: folderNameToPrettyName(folderName),
    linkName: folderNameToKebabCaseName(folderName),
  }));
  return featuresPreview;
};
