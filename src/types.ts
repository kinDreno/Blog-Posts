export type ProfileData = {
name: string;
age?: number | null;
filteredFavorites?: string | null;
}



export type User = {
user: string
userPosts: Contents[]
}

export interface Contents {
    title: string;
    caption: string;
    starred: number;
    genre: string[];
  }
  
  export interface Options {
    genre: string;
    value: string;
  }
// this file for type storage
