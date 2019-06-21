export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") willUpdate = validator(value);

    if (willUpdate) {
      setValue(value);
      console.log(event.target);
    } else {
      console.log("validate string length large");
    }
  };

  return { value, onChange };
};
