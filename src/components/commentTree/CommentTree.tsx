import React from "react";
import type IComment from "../../interfaces/IComment";
import CommentListItem from "../commentListItem/CommentListItem";
import { Space } from "antd";
import { useAppSelector } from "../../store/hook";

function CommentTree({
  parentId,
  level,
}: {
  parentId: number;
  level: number;
}): JSX.Element {
  const { comments } = useAppSelector((state) => state.comments);

  console.log(comments);

  return (
    <Space direction="vertical">
      {comments
        .filter((comment: IComment) => comment.parent === parentId)
        .map((comment: IComment) => (
          <CommentListItem key={comment.id} comment={comment} level={level} />
        ))}
    </Space>
  );
}

export default CommentTree;
