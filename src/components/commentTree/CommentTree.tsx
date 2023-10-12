import React from "react";
import type IComment from "../../interfaces/IComment";
import CommentListItem from "../commentListItem/CommentListItem";
import { Space } from "antd";
import { useAppSelector } from "../../store/hook";
import Loader from '../loader/Loader';

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
      <Loader/>
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
