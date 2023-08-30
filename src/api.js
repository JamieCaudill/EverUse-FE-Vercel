// API CALLS //

import { gql } from '@apollo/client';
  
const GET_ALL_ITEMS = gql`
query {
  products {
      id
      name
      category
      image
      description
      color
      quantity
      size
      price
  }
}`

  // an example of a post
  // const CREATE_POST = gql`
  //   mutation ($input: CreatePostInput!) {
  //     createPost(input: $input) {
  //       id
  //       title
  //       body
  //     }
  //   }`;

  // const createPostInput = {
  //   title: "A Very Captivating Post Title",
  //   body: "Some interesting content."
  // };

  // const [createPost] = useMutation(CREATE_POST);

  // const handleCreatePost = () => {
  //   createPost({
  //     variables: {
  //       input: createPostInput,
  //     },
  //   })
  //   .then(res => console.log('post response:', res))
  // };  

  export { GET_ALL_ITEMS }