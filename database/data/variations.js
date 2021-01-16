// --- NOTES ---

/* eslint-disable quotes */
// 41 total products
// 15 of them change to new photos when hovered over
// The point of this file is to create an array of 41 objects that each has
// an original and an onHover property like the schema
// Each property is a url that points to that image in my s3
// Only those 15 products will have a different onHover image; the rest point to the same url

// For later: it may be inefficient to have two urls if they are the same;
// we'll see how the frontend goes

// Also this file can be simplified

// --- SEED DATA ---
const variations = [];

const imageUrls = ['20895_BLK.webp', '20895_BSNG.webp', '20895_HART.webp', '20895_PTPL.webp', '20895_SPRB.webp', '26520_FGE.webp', '26520_MJVK.webp', '26520_NENA.webp', '26635_FGE.webp', '26635_OWBR.webp', '26635_SNBL.webp', '27588_BARR.jpg', '27588_CSC.webp', '27588_FGE.jpg', '27588_KPF.jpg', '27588_NENA.jpg', '27630_BLK.webp', '27630_FGE.webp', '27630_MULB.webp', '27630_NENA.webp', '27765_DWA.webp', '27765_INBK.webp', '27795_COI.webp', '27795_DKAS.webp', '27805_COI.webp', '27805_INBK.webp', '27805_SNBL.webp', '27815_COI.webp', '27815_INBK.jpg', '27825_COI.webp', '27825_INBK.webp', '27871_BLK.webp', '27871_CNY.webp', '27871_FGE.webp', '27871_TOPB.webp', '83576_BLK.jpg', '83576_CNY.webp', '83576_FGE.webp', '83576_HTE.jpg', '83576_INDG.jpg', '83576_MAN.jpg'];

const onHovers = ['20895_HART_KT1.webp', '26520_MJVK_OM1.webp', '26635_OWBR_KT1.webp', '27588_CSC_KT1.webp', '27630_BLK_KT1.webp', '27630_NENA_KT1.jpg', '27765_DWA_OM1.webp', '27795_COI_OM1.webp', '27805_COI_OM1.webp', '27805_INBK_OM1.webp', '27815_COI_OM1.webp', '27825_COI_OM1.webp', '27871_FGE_KT1.webp', '83576_CNY_TM1.webp', '83576_FGE_CS1.webp'];

const onHoverComparisons = ['20895_HART', '26520_MJVK', '26635_OWBR', '27588_CSC', '27630_BLK', '27630_NENA', '27765_DWA', '27795_COI', '27805_COI', '27805_INBK', '27815_COI', '27825_COI', '27871_FGE', '83576_CNY', '83576_FGE'];

const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "IndianRed",
  "Indigo",
];

// creator functions
const onHoverCreatorHelper = [];

for (let i = 0; i < onHovers.length; i += 1) {
  onHoverCreatorHelper.push({
    url: onHovers[i],
    comp: onHoverComparisons[i],
  });
}

const onHoverCreator = (imageUrl) => {
  const og = imageUrl.split('.')[0];
  let result = imageUrl;
  if (onHoverComparisons.includes(og)) {
    onHoverCreatorHelper.forEach((prod) => {
      if (prod.comp === og) {
        result = prod.url;
      }
    });
  }
  return result;
};

const host = 'https://fjords.s3-us-west-1.amazonaws.com/';

class Variation {
  constructor(color, imageUrl) {
    this.color = color;
    this.original = host + imageUrl;
    this.onHover = host + onHoverCreator(imageUrl);
  }
}

imageUrls.forEach((imageUrl, i) => variations.push(new Variation(colors[i], imageUrl)));
module.exports = variations;
