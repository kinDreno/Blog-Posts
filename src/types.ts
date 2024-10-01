export type ProfileData = {
name: string;
age?: number | null;
filteredFavorites?: string | null;
}

export type Contents = {
    image?: string;
    title: string
    caption: string
    starred: number;
    starThis?: () => void
}

export type User = {
user: string
userPosts: Contents[]
}

// this file for type storage
