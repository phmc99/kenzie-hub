export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  name: string;
  email: string;
  password: string;
  bio: string;
  course_module: string;
  contact: string;
}

export interface TechProps {
  id: string;
  title: string;
  status: string;
}

export interface WorkProps {
  id?: string;
  title?: string;
  description?: string;
  deploy_url?: string;
}
