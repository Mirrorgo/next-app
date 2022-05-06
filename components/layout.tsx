import { FC } from "react";

interface IProps {
  name: string;
  children: React.ReactNode;
}
const Child1: FC<IProps> = (props) => {
  const { name, children } = props;
  console.log(children);
  return (
    <div className="App">
      <h1>hello child1</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default Child1;
