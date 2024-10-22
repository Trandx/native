/**
 *
 * @param length default value is 4
 * @param type 'numeric' | 'alphanumeric'. Default alphanumeric
 * @returns alpha-numeric value
 */
type CodeType = 'numeric' | 'alphanumeric' | 'alphabetic';

const random = (length = 4, type: CodeType = 'alphanumeric', sensitive = false) => {
  let code = '';
  
  if (type == 'numeric') {
    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code
  } 
  
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();

  if (sensitive == true) {
    characters += characters.toUpperCase();
  }

  if (type = 'alphanumeric') {
    characters += '0123456789';
  }

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    code += characters[index];
  }

  return code;
};

export { random };
