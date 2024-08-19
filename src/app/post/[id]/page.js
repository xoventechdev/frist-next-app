import React from "react";

export const generateMetadata = async ({ params }) => {
  const id = params.id;
  const post = await postDetail(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const postDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const callPostComment = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const id = params.id;

  //   const post = await postDetail(id);
  //   const comments = await callPostComment(id);

  const [postRes, commentsRes] = await Promise.allSettled([
    postDetail(id),
    callPostComment(id),
  ]);

  const post = postRes.status === "fulfilled" ? postRes.value : null;
  const comment = commentsRes.status === "fulfilled" ? commentsRes.value : [];

  return (
    <div>
      <header>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </header>
      <card>
        <h3>Comments:</h3>
        {comment.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        ))}
      </card>
    </div>
  );
};

export default page;
