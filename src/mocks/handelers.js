import { rest } from "msw";
//import IPostInfo from "../types/IPostInfo"
//import { IPostForm, IPostInfo } from "@/types/IPostInfo";

const posts = [];
const postImages = {};
const profileImages = {};

export const handlers = [
	// 타임라인 가져오기
	rest.get("http://localhost:3000/v1/main", (req, res, ctx) => {
	  return res(ctx.status(200), ctx.json(posts));
	}),
  
	// 포스트 업로드하기
	rest.post("http://localhost:3000/v1/upload", (req, res, ctx) => {
		const newPost = {};
		const fileId = Math.random().toString(36).substring(7);
		
		const postImage = req.body.get('postImage') // "file" is the key of the form-data field containing the file
		const profileImage = req.body.get('profileImage')

    	const reader = new FileReader()
		
		// profile Image 저장
		reader.readAsDataURL(profileImage);
		profileImages[fileId] = reader.result;
		newPost.profileImageURL = `http://localhost:3000/profileImage/${fileId}`;

		// 유저 이름 저장
		newPost.username = req.body.get('username');

		// post Image 저장
    	reader.readAsDataURL(postImage)
		postImages[fileId] = reader.result;
		newPost.postImgaeURL = `http://localhost:3000/postImage/${fileId}`;

		// save post text
		newPost.text = req.body.get('text');

		// save location
		newPost.location = req.body.get('location');

		// save fileId
		newPost.postID = fileId;

		posts.unshift(newPost);

	  return res(ctx.status(201));
	})


  ];
  