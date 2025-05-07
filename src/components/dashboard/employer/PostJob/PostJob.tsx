"use client";
import { useState } from "react"
import PostJobForm from "./PostJobForm";
import Subscription from "./Subscription";

const PostJob = () => {
  const [isPostForm, setIsPostForm] = useState(false);
  
  return (
    <>
       {
        isPostForm ? (
            <PostJobForm/>
        ):(
            <Subscription/>
        )
       }
    </>
  )
}

export default PostJob