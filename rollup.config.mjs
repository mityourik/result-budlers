import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

export default {
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs',
    assetFileNames: "[name]-[hash][extname]",
  },
  plugins: [
    styles(),
    image(),
    babel({ 
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        extensions: [".js"],
        exclude: "node_modules/**",
    }),
    serve({
      open: true,
      contentBase: 'build',
      port: 3000
    }),
    livereload('build'),
    copy({
      targets: [
        { src: 'index.html', dest: 'build' }
      ]
    })
  ],
};