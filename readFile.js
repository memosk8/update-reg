import xlsx from "xlsx";

/***
 * 
 * @param {String} path
 * The path to the spreadsheet file
 * 
 * @description
 * Takes the spreadsheet path, opens the file and 
 * exports all the data to an array of objects, 
 * each one representing a row in the file
 * 
 * @returns {Array<Object>}
 * A collection of all the rows 
 * 
 */
export default function readFile(path) {
  const file = xlsx.readFile(path);
  return xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);;
}