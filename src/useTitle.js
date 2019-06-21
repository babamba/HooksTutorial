import { useState, useEffect } from "react";

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  //updateTitle 이 componentDidMount
  //[title] 이 componentWillUpdate 를 가지고있다.

  return setTitle;
};
