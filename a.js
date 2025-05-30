const callApi = (data) => fetch(`/api/data?=${data}`);

function processData(lines) {
    lines.forEach((item) => {
        callApi(item);
    });
}



const lines = [1, 3, 5, 7, 9];
processData(lines);
