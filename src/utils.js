const exportFilename = "inventory.csv";

export function downloadCSV(data) {
  const csvData = new Blob([data], { type: "text/csv;charset=utf-8;" });
  //IE11 & Edge
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(csvData, exportFilename);
  } else {
    //In FF link must be added to DOM to be clicked
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(csvData);
    link.setAttribute("download", exportFilename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
