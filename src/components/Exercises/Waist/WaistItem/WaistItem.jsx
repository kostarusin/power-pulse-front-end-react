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
  import sprite from '../../../../assets/sprite.svg';
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
  
  export const WaistItem = ({ exercises, toggleExerciseModal }) => {
    return (
      <WaistItemLi>
        <BtnWrapper>
          <CardLabel>{texts.cardLabel}</CardLabel>
          <BtnLabel
            onClick={() => {
                toggleExerciseModal(exercises);
            }}
            type="button"
          >
            {texts.btnLabel}
            <span>
              <SvgExercise>
                <use href={`${sprite}#icon-arrow-right`}></use>
              </SvgExercise>
            </span>
          </BtnLabel>
        </BtnWrapper>
        <ExercisesTitleBox>
          <SpanExerciseRun>
            <SvgExerciseRun width={24} height={24}>
              <use href={`${sprite}#icon-run-exercises`}></use>
              <use href={`${sprite}#icon-running-stick-figure`}></use>
            </SvgExerciseRun>
          </SpanExerciseRun>
          <Title>{capitalizeFirstLeter(exercises.name)} </Title>
        </ExercisesTitleBox>
  
        <List>
          {Object.keys(texts.list).map(e => (
            <ListItem key={e}>
              {texts.list[e]}
              <ListItemValue>
                {capitalizeFirstLeter(String(exercises[e]))}
              </ListItemValue>
            </ListItem>
          ))}
        </List>
      </WaistItemLi>
    );
  };