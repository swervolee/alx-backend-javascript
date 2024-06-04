const updateStudentGradeByCity = ((arr, city, grades) => {
  const gradeMaps = new Map(grades.map(item => [item.studentId, item.grade]));
  const cityLocation = arr.filter((student) => student.location === city)
  const updatedGrades = cityLocation.map(student => {
    if (gradeMaps.has(student.id)) {
      student.grade = gradeMaps.get(student.id);
      } else {
	student.grade = "N/A";
      }
      return student;
  });
  return updatedGrades;
});

export default updateStudentGradeByCity;
