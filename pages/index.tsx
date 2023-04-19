import { Button } from "../components/button/button";
import { Htag } from "../components/htag/htag";
import { Paragraph } from "../components/paragraph/paragraph";
import { Tag } from "../components/tag/tag";
import { Rating } from "../components/rating/rating";

export default function Home() {
  return (
    <>
      <Htag tag={"h1"}>kek</Htag>
      <Button arrow="right" appearance={"primary"}>
        primary
      </Button>
      <Button arrow="down" appearance={"ghost"}>
        ghost
      </Button>
      <Paragraph size={"small"}>Small</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size={"big"}>Big</Paragraph>
      <Tag size="small" color="red" href="vk.com">test</Tag>
      <Rating isEditable={true} rating={4}/>
    </>
  );
}
