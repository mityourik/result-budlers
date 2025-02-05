import JSimg from './assets/js-image.png';
import './index.css';

const title = document.createElement("h1");
title.innerHTML = "I love JavaScript";

const img = document.createElement("img");
img.src = JSimg;

document.body.append(title);
document.body.append(img);