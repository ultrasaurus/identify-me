// User's public profile data
export type ProfileData = {
  $key?: string,
  photo?: string,
  handle?: string,
  name?: string
}

export class Profile {
    $key: string;
    photo: string;
    handle: string;
    name: string;
    constructor(data: ProfileData) {
      this.$key = data.$key || "";
      this.photo = data.photo || "";
      this.handle = data.handle || "";
      this.name = data.name || "";
    }
}

// User's private account information
export class Account {
    $key: string;
    email: string;
    admin: boolean;
    githubToken: string;
    updatedAt: Object;    // server timestamp
}
