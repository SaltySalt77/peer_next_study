export interface IPostInfo {
  profileImageURL: string | null;
  username: string;
  postImageURL: string;
  text: string;
  postID?: string;
  location?: string | null;
}

export interface IPostForm {
	profileImage: File;
	username: string;
	postImage: File;
	text: string;
	location?: string;
}