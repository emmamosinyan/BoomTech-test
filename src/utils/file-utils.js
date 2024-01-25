const types = /\.(?:wav|mp3)$/i;
  
export const isFileAccepted = (file) => types.test(file.name)