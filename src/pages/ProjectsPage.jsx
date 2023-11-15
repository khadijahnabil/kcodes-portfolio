import styled from "styled-components";
import { useFetchProjects } from "../service/fetchProjects";
import { Loading } from "../pages/index";

const ProjectsPage = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const smallProjects = projects.filter((project) => project.type === "small");
  const bigProjects = projects.filter((project) => project.type === "big");

  return (
    <Wrapper>
      <h1>.projects</h1>
      <div className='project-section'>
        <h2>.big projects</h2>
        <div className='centered'>
          <section className='cards'>
            {bigProjects.map((project) => {
              const { id, img, url, title } = project;
              return (
                <div key={id}>
                  <a href={url} target='_blank'>
                    <article className='card'>
                      <img src={img} alt='project-image' />
                      <h3 className='card-title'>{title}</h3>
                    </article>
                  </a>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <hr />
      <div className='project-section'>
        <h2>.small projects</h2>
        <div className='centered'>
          <section className='cards'>
            {smallProjects.map((project) => {
              const { id, img, url, title } = project;
              return (
                <div key={id}>
                  <a href={url} target='_blank'>
                    <article className='card'>
                      <img
                        src={img}
                        alt='project-image'
                        className='small-img'
                      />
                      <h3 className='card-title'>{title}</h3>
                    </article>
                  </a>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;

  .project-section {
    display: flex;
    flex-wrap: wrap;

    h2 {
      margin: 30px auto;
      width: 12rem;
      background-color: black;
      text-align: center;
      padding: 0.5rem;
      border-radius: 3px;
    }
  }

  .centered {
    padding: 1rem 9rem 0;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 13px;
  }

  .card {
    border: 15px solid black;
    border-radius: 3px;
    margin-bottom: 0.5rem;
    transition: transform 0.4s ease, border-color 0.4s ease;
  }

  .card:hover {
    transform: scale(1.1);
    border-color: #ff4b91;
    h3 {
      background-color: #ff4b91;
      color: black;
    }
  }

  img {
    width: 19.25rem;
    height: 11.5rem;
    object-fit: cover;
  }

  .small-img {
    width: 15rem;
    height: 9rem;
    object-fit: cover;
  }

  .card-title {
    display: block;
    margin: -0.5px;
    background-color: black;
    text-align: center;
    padding: 1rem;
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  img {
    margin: 1rem;
  }

  hr {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
`;

export default ProjectsPage;
