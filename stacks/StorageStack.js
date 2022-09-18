import { Table } from "@serverless-stack/resources";
import { Bucket } from "aws-cdk-lib/aws-s3";

export function StorageStack({ stack, app }) {
  // Here we create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    // Primary key kind of
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  const bucket = new Bucket(stack, "Uploads");

  return {
    table,
    bucket,
  };
}
