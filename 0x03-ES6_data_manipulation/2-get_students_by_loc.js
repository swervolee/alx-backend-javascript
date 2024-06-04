const getStudentsByLocation = (arr, city) => {
    const result = arr.filter((student) => student.location === city);
    return result;
};

export default getStudentsByLocation;
