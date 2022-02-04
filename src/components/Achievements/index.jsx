import { AchievementsContainer, AchievementTitle, AchievementsData, AchievementItem } from './styles';

import { MdVerified, MdAddTask, MdSupervisedUserCircle } from 'react-icons/md';

export const Achievements = () => {
  return (
    <AchievementsContainer>
      <AchievementTitle>
        <h3>
          Great Achievements <span>in My Career</span>
        </h3>
      </AchievementTitle>
      <AchievementsData>
        <AchievementItem>
          <MdAddTask size='50' color='#069c83' />
          <div>
            <h2>54</h2>
            <p>Projects complete</p>
          </div>
        </AchievementItem>
        <AchievementItem middle>
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
      </AchievementsData>
    </AchievementsContainer>
  );
};
