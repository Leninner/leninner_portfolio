import { AchievementsContainer, AchievmentTitle, AchievmentsData, AchievementItem } from './styles';

import { MdVerified, MdAddTask, MdSupervisedUserCircle } from 'react-icons/md';

export const Achievments = () => {
  return (
    <AchievementsContainer>
      <AchievmentTitle>
        <h3>
          Great Achievements <span>in My Career</span>
        </h3>
      </AchievmentTitle>
      <AchievmentsData>
        <AchievementItem>
          <MdAddTask size='50' color='#069c83' />
          <div>
            <h2>54</h2>
            <p>Projects complete</p>
          </div>
        </AchievementItem>
        <AchievementItem>
          <MdSupervisedUserCircle size='50' color='#069c83' />
          <div>
            <h2>2+</h2>
            <p>Satisfied Clients</p>
          </div>
        </AchievementItem>
        <AchievementItem>
          <MdVerified size='50' color='#069c83' />
          <div>
            <h2>5</h2>
            <p>Awards winning</p>
          </div>
        </AchievementItem>
      </AchievmentsData>
    </AchievementsContainer>
  );
};
