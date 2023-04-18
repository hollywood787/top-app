import { Button } from "../components/button/button";
import { Htag } from "../components/htag/htag";

export default function Home() {
  return (
    <>
      <Htag tag={"h1"}>kek</Htag>
      <Button appearance={"primary"}>primary</Button>
      <Button appearance={"ghost"}>ghost</Button>
    </>
  );
}

