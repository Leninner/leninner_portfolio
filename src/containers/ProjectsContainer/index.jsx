import {
  StyledProjectsContainer,
  Title,
  Container,
  Description,
  ShowAllButton,
  ProjectCounter,
  ProjectsCounterContainer,
} from './styles'
import { ProjectInfo } from '../../components/ProjectInfo'
import { projectsData } from '../../assets/data/projectsData'
import { motion } from 'framer-motion'

export const ProjectsContainer = () => {
  const projects = [...projectsData]
  const projectsToDisplay = projects.slice(0, 2)

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <StyledProjectsContainer>
      <Title>
        <span>Featured</span> Projects
      </Title>

      <Description>
        Each project was built with <strong>high value tools</strong> like React, Redux and always looking to write a
        <strong>scalable and performant code.</strong>
      </Description>

      <ProjectsCounterContainer>
        Projects Counter: <ProjectCounter>{projects.length}</ProjectCounter>
      </ProjectsCounterContainer>

      <Container
        as={motion.div}
        initial="offscreen"
        variants={cardVariants}
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {projectsToDisplay.map((project) => (
          <ProjectInfo {...project} key={project.id} />
        ))}
      </Container>

      <ShowAllButton to="/projects">Show All</ShowAllButton>
    </StyledProjectsContainer>
  )
}
