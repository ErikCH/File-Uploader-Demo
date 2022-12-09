import React from "react";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import { Card, Flex, Heading, Image } from "@aws-amplify/ui-react";

export function ImageCard({
  item,
  index,
  imageKeys
}: {
  index: number;
  item: string;
  imageKeys: S3ProviderListOutputItem[];
}) {
  return (
    <Card lineHeight="small" border={"2px solid #66ff99"}>
      <Flex gap="xxs" direction="column">
        <Image
          alt={imageKeys[index]?.key}
          width="300"
          height="300"
          src={item}
          sizes="50vw"
          style={{ borderRadius: "medium", objectFit: "contain" }}
        ></Image>
        <Flex alignItems="center">
          <Heading level={2} isTruncated={true}>
            {imageKeys[index]?.key}
          </Heading>
        </Flex>
      </Flex>
    </Card>
  );
}
