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
  const [loading, setLoading] = useState(false);
  const [hasKids, setHasKids] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const dispath = useAppDispatch();

  const openComments = (comment: IComment): void => {
    if (comment.kids?.length !== 0) {
      setLoading(true);
      setHasKids(true);
      setBlocked(true);
      dispath(getComments(comment.kids))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {});
    }
  };

  const linkStyle = blocked ? "commentLink-blocked"  : ""; 

  return (
    <div style={{ marginLeft: level * 20 }}>
      <Link
        className={`commentLink ${linkStyle}`}
        onClick={() => {
          openComments(comment);
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
      </Link>
      {hasKids ? (
        <CommentTree
          parentId={comment.id}
          level={level + 1}
          loading={loading}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CommentListItem;
