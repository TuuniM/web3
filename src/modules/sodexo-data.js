import Lunchmenu from '../assets/sodexo-menu.json';
console.log('Lunch menu json', Lunchmenu);

let coursesEn = [];
let coursesFi = [];


const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.Values(sodexoDailyMenu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

const SodexoData = {};

export default SodexoData;
