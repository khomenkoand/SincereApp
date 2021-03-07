import React from "react";
import Post from "../../components/Post";

const News = () => {
  return (
    <div className="news">
      <Post
        title="Презентация компании Sincere Systems"
        description={[
          "Приглашаем Вас на офлайн презентацию компании Sincere Systems.",
          "Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр",
        ]}
      />
      <Post
        title="Приглашаем Вас на офлайн презентацию компании Sincere Systems"
        description={[
          "Anim occaecat incididunt sint velit officia reprehenderit ad elit elit consectetur culpa incididunt. Ex incididunt pariatur fugiat ex anim ullamco ea. Non quis aliquip irure excepteur Lorem veniam fugiat fugiat ut do et eiusmod. Est Lorem eu dolor ea mollit velit sint.",
          "Adipisicing tempor occaecat nostrud ex fugiat et commodo incididunt id amet commodo aliqua ea. Ea elit reprehenderit eiusmod cupidatat magna exercitation sunt. Sint eiusmod est nulla velit esse. Link View mollit aliqua elit laborum nulla irure.",
          "Nisi irure ullamco eiusmod irure reprehenderit ea dolor qui voluptate officia.",
        ]}
      />
    </div>
  );
};

export default News;
