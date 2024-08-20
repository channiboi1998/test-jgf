import path from 'path';
export default {
  '**/*.ts?(x)': (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file));
    return [`eslint ${relativePaths.join(' ')}`, 'tsc --noEmit'];
  }
};
