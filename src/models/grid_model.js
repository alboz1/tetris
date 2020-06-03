export const gridOptions = {
    cols: 11,
    rows: 20
};

export const grid = Array.from({length: gridOptions.rows}, () => Array(gridOptions.cols).fill(0));