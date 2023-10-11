import React from "react";
import type IComment from "../../interfaces/IComment";
import CommentListItem from "../commentListItem/CommentListItem";
import { Space, Spin } from "antd";
import { useAppSelector } from "../../store/hook";

function CommentTree({
  parentId,
  level,
  loading,
}: {
  parentId: number;
  level: number;
  loading: boolean;
}): JSX.Element {
  const { comments } = useAppSelector((state) => state.comments);

  if (loading) {
    return (
      <div className="example">
        <Spin size="large" />
      </div>
    );
  }

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
