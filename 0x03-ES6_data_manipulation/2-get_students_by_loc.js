const getStudentsByLocation = ((arr, city) => {
    return arr.filter((student) => {
	return student.location === city;
    });
});

export default getStudentsByLocation;
