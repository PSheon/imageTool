export const mimnTypeConverter = mime => {
  switch (mime) {
    case 'image/jpeg':
      return 'JPG';
    case 'image/png':
      return 'PNG';
    case 'image/svg+xml':
      return 'SVG';
    case 'application/pdf':
      return 'PDF';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    default:
      return 'Word';
  }
};
