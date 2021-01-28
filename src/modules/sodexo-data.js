import Lunchmenu from '../assets/sodexo-menu.json';
console.log('Lunch menu json', Lunchmenu);

let coursesEn = [];
let coursesFi = [];

/**
 * Parses couse arrays from Sodexo json file
 *
 * @param {Object} sodexoDailyMenu
 */
const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.Values(sodexoDailyMenu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

parseSodexoMen(Lunchmenu.courses);

const SodexoData = {coursesEn, coursesFi};

export default SodexoData;

