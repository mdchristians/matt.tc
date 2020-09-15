export const createCodeTabs = (code) => {
  let tabNames = [];
  let tabCode = [];

  const codeArr = code.split('\n');
  const files = codeArr.filter((l) => l.includes('**/'));

  for (let i = 0; i < files.length; i++) {
    const prefix = code.indexOf(files[i]);
    const suffix = files[i + 1] ? code.indexOf(files[i + 1]) : code.length - 1;

    const block = code.substring(prefix, suffix);

    tabNames.push(parseName(files[i]));
    tabCode.push(block.replace(files[i], '').trim());
  }

  return {
    tabNames,
    tabCode,
  };
};

function parseName(str) {
  return str.replace('/**', '').replace('**/', '').trim();
}
