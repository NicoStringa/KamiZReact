// export const formatDate = (date) =>
//   new Intl.DateTimeFormat("es-AR", {
//     dateStyle: "medium",
//     timeStyle: "short",
//   }).format(date);

export const formatDate = (date) => {
  const theDate = date.split('T')[0];
  const dateReadable = theDate.split('-').reverse().join('/');

  const time = date.split('T')[1].split('.')[0];
  const timeReadable = time.split(':').slice(0, 2).join(':');

  return `${dateReadable} ${timeReadable}`;
};
