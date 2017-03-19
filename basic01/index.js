import hello from './hello';
import world from './world';
// import './image_viewer';

const btn = document.createElement('button');
btn.innerText = "click";
btn.addEventListener('click', () => {
  System.import('./image_viewer').then(module => {
    console.log(module);
  })
});

document.body.appendChild(btn);
// document.write(`${hello} ${world} !!`);
