export const toggleDropDown = (dropDown) => ({
  type: "DROP_DOWN",
  visible: !dropDown,
});

export const setCenter = (center) => ({
  type: "SET_CENTER",
  center,
});

export const setFountainData = (fountainData) => ({
  type: "SET_FOUNTAIN_DATA",
  fountainData,
});

export const setSelected = (selected) => ({
  type: "SET_SELECTED",
  selected,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  language,
});
