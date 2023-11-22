//lodash
import _ from 'lodash';

const convertValues = (obj) => {
  return _.omitBy(
    _.mapValues(obj, (value, key) => {
      if (key === 'birthday') {
        return value.split('T')[0];
      } else if (_.isNumber(value) || _.isString(value)) {
        return _.isNaN(Number(value)) ? value : Number(value);
      }
      return value;
    }),
    (_, key) =>
      ['avatarURL', 'email', 'bmr', 'createdAt', 'dailyExerciseTime'].includes(
        key,
      ),
  );
};

export default convertValues;
