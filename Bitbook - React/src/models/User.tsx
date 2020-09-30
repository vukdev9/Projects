export class User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  about: string;
  email: string;
  prefix: string;
  createdAt: string;
  updatedAt: string;
  lastActive: string;
  constructor(userData: any) {
    this.id = userData._id;
    this.avatarUrl = userData.avatarUrl;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.about = userData.about;
    this.email = userData.email;
    this.prefix = userData.prefix;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
    this.lastActive = userData.lastActive;
  }
}
