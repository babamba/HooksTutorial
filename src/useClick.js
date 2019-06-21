export const useClick = onClick => {
  if (typeof onClick === "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    // 컴포넌트가 마운트 됬을떄, 업데이트됬을때  이벤트리스너 등록
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //useEffect를 return 받은 그 함수는 componentWillUnMount 떄 호출된다.. 머지모르겟다
    // 그 function은 componentWillUnMount로 부터 호출된거다.
    //언마운트 시점에 어떤작업을 수행하고 싶으면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 한다고 생각하면됨
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
