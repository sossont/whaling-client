import React, { useState } from 'react';
import CreateVoteMain from './CreateVoteMain';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import LastStep from './LastStep';
import {
  createVoteBtnStyle,
  ProgressBtnWrapper,
  SProgressBar,
} from '../../styles/createvote.styles';
import Button from '../../components/Button';

const CreateVote = () => {
  const [step, setStep] = useState(0);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const getStepPage: any = {
    0: <CreateVoteMain nextStep={nextStep} />,
    1: <FirstStep />,
    2: <SecondStep />,
    3: <ThirdStep />,
    4: <FourthStep />,
    5: <LastStep />,
  };

  return (
    <div>
      <button onClick={prevStep}>뒤로가기</button>
      {getStepPage[step]}
      {step > 0 && step < 5 && (
        <ProgressBtnWrapper>
          <p>{step}/4</p>
          <SProgressBar
            completed={25 * step}
            bgColor="#4652E6"
            height="4px"
            width="335px"
            borderRadius="2px"
            isLabelVisible={false}
            baseBgColor="#ECECEC"
            maxCompleted={100}
            animateOnRender
          />
          <Button
            buttonType="Progress"
            content="다음"
            style={createVoteBtnStyle}
            onClick={nextStep}
          />
        </ProgressBtnWrapper>
      )}
    </div>
  );
};

export default CreateVote;