import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hook";
import { getComments } from "../../store/slices/commentSlice";
import CommentTree from "../commentTree/CommentTree";
import type IStory from '../../interfaces/IStory';

function CommentList({ story }: { story: IStory }): JSX.Element {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const loadCommentsRef = useRef(true);

  useEffect(() => {
    if (loadCommentsRef.current) {
      loadCommentsRef.current = false;
      setLoading(true);

    dispatch(getComments(story?.kids ?? []))
      .then(() => {setLoading(false)})
      .catch(() => {});
   }
  }, []);

  return <CommentTree parentId={story?.id ?? 0} level={0} loading={loading} />;
}

export default CommentList;
