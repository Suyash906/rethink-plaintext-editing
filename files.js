
import BACKEND_URL from './config';
export async function listFiles() {
  let files = [];
  await fetch(BACKEND_URL)
  .then(response => response.json())
  .then( data => {
    // let files = []
    data.map( (curr, index) => {
      let new_file = new File(
        [
          curr.fileText
        ],
        curr.fileExtension,
        {
          type: curr.type,
          lastModified: curr.updatedAt
        }
      );
      files.push(new_file)
    })
  })
  .catch(error => console.log(error))
  console.log(files)
  return files;
}

export function updateFile(filename, file) {
  fileHandler.setFileText(filename, file.text())
  fileHandler.setLastModifiedDate(file.lastModified);
}