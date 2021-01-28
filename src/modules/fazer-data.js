import FazerLuncMenuFi from '../assets/fazer-fi.json';
import FazerLuncMenuEn from '../assets/fazer-en.json';

console.log('FazerData', FazerLuncMenuFi, FazerLuncMenuEn);

/**
 * Returns a daily menu array from Fazer weekly json data
 * @param {Object} menuData
 * @param {Number} dayOfWeek week day 0-6
 * @returns {Array} daily menu
 */
const parseDataMenu = (menuData, dayOfWeek) => {

  let dailyMenu = menuData.LunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    //console.log(setMenu);
    let mealName = setMenu.Name;
    let dishes = setMenu.meals.map(dish => {
      return `${dish.Name} (${dish.Diets.join()})`;
    });
    return mealName ? mealName : dishes;
  });

  return dailyMenu;
};

console.log('debug fasu', parseDailyMenu(FazerLuncMenuFi, 0));

