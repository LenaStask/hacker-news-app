import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import type IComment from "../../interfaces/IComment";
import { useAppDispatch } from "../../store/hook";
import { getComments } from "../../store/slices/commentSlice";
import CommentTree from "../commentTree/CommentTree";
import "./style.css";

function CommentListItem({
  comment,
  level,
}: {
  comment: IComment;
  level: number;
}): JSX.Element {
  const [hasKids, setHasKids] = useState(false);
  const dispath = useAppDispatch();

  const openComments = (comment: IComment): void => {
    if (!("kids" in comment)) {
      setHasKids(false);
    } else {
      setHasKids(true);
      dispath(getComments(comment.kids))
        .then(() => {})
        .catch(() => {});
    }
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <Link
        className="commentLink"
        onClick={() => {
          openComments(comment);
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
      </Link>
      {hasKids ? <CommentTree parentId={comment.id} level={level + 1} /> : ""}
    </div>
  );
}

export default CommentListItem;
