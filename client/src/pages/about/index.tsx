import style from "./index.scss";
import React from "react";
import { ErrorBoundary, Spinner, Title, Box } from "@components/atoms";
import { Layout } from "@components/template";

const About = () => {
  const title = "О центре";
  const isLoading = false;
  return (
    <Layout
      title={title || "О центре"}
      description={"Информация о нашем центре"}
      keywords={"Kek"}
      breadcrumbs={[
        { title: "Главная", link: "/" },
        { title: "О центре", link: "/about" }
      ]}
    >
      <Box>
      {isLoading ? (
        <Spinner />
      ) : (
        <ErrorBoundary>
          <Title text={title} />
          <section>
       
              <div className={style.text}>
                <p>INTELLECT MEDICAL GROUP - это медицинский центр со специализациями программ реабилитации и эстетической медицины, а также Школа осознанного здоровья.</p>
                <p> В нашем медицинском центре специалисты помогут вам решить проблемы с болью в спине, головными болями, заболеваниями суставов, помочь со сколиозом и нарушениями осанки, грыжами и протрузией позвонков, а также с последствиями травм и операций.</p>
                <p> В центре ведут прием высококлассные врачи: невролог, ортопед, травматалог, кинезиолог, остеопат, манульный терапевт.</p>
                <p> IMed вобрал в себя лучшие традиции и мировой опыт восстановительной медицsины и профилактики. Мы гордимся своей уникальной коллекцией массажных техник и альтернативных оздоровительных методик в лучших традициях восточных и западных школ, которые проводят наши опытные мастера.</p>
              </div>
         
          </section>
        </ErrorBoundary>
      )}
      </Box>
    </Layout>
  );
};

export default About;