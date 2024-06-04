const getStudentsByLocation = (arr, city) => {
  const arrayResult = arr.filter((student) => student.location === city);
   return arrayResult;
};

export default getStudentsByLocation;
