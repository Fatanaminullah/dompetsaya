export const sortData = (data1, data2, key) => {
    if (key) {
        if (data1[key] < data2[key]) return -1;
        if (data1[key] > data2[key]) return 1;
        return 0;
    }
    if (data1 < data2) return -1;
    if (data1 > data2) return 1;
    return 0;
};

export default {};