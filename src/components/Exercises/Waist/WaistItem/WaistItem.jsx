import {
  BtnLabel,
  BtnWrapper,
  CardLabel,
  ExercisesTitleBox,
  List,
  ListItem,
  ListItemValue,
  SpanExerciseRun,
  SvgExercise,
  SvgExerciseRun,
  Title,
  WaistItemLi,
} from './WaistItem.styled';
import icons from '../../../../assets/icons.svg';

const texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};

const capitalizeFirstLeter = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const WaistItem = ({ data,toggleExerciseModal }) => {
  
  return (
    <WaistItemLi>
      <BtnWrapper>
        <CardLabel>{texts.cardLabel}</CardLabel>
        <BtnLabel
         onClick={toggleExerciseModal}
          type="button"
        >
          {texts.btnLabel}
          <span>
            <SvgExercise>
              <use href={`${icons}#icon-add-arrow`}></use>
            </SvgExercise>
          </span>
        </BtnLabel>
      </BtnWrapper>
      <ExercisesTitleBox>
        <SpanExerciseRun>
          <SvgExerciseRun width={24} height={24}>
            <use href={`${icons}#icon-runn   ing-figure`}></use>
            <use href={`${icons}#icon-running-stick-figure-svgrepo-com-1`}></use>
          </SvgExerciseRun>
        </SpanExerciseRun>
        <Title>{capitalizeFirstLeter(data.name)} </Title>
      </ExercisesTitleBox>

      <List>
        {Object.keys(texts.list).map((e) => (
          <ListItem key={e}>
            {texts.list[e]}
            <ListItemValue>
              {capitalizeFirstLeter(String(data[e]))}
            </ListItemValue>
          </ListItem>
        ))}
      </List>
    </WaistItemLi>
  );
};
