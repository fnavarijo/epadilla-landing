// TODO: This could be improved by creating a slug automatically.
export const getTitleId = (title: String) => title.replace(' ', '_');
export const getTitleFromId = (title: String) => title.replace('_', ' ');