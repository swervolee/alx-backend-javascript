const getStudentIdsSum = (students) => {
  const studentsSum = students.map(studentObject => studentObject.id).reduce((total, currentId) => {
    return total + currentId;
  }, 0);
  return studentsSum;
};

export default getStudentIdsSum;
