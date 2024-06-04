const updateStudentGradeByCity = ((arr, city, grades) => {
    const gradeMaps = new Map(grades.map(item => [item.studentId, item.grade]));
    const result = arr.filter((student) => student.location === city)
	  .map(student => {
	if (gradeMaps.has(student.id)) {
	    student.grade = gradeMaps.get(student.id);
	} else {
	    student.grade = "N/A";
	}
	return student;
    });

    return result;
});

export default updateStudentGradeByCity;
