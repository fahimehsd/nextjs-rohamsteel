export interface NewsState {
  id: number;
  title: string;
  desc: string;
  image?: string;
  createdAt?: string;
  slug: string;
}
export interface ProductsState {
  id: number;
  name: string;
  desc: string;
  image?: string;
  price: number;
  slug: string;
}
export interface MoreState {
  id: number;
  title: string;
  desc: string;
  image?: string;
}

export interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage: number;
  paginate: (number: any) => void;
}

export interface ProductsCardProps {
  data: ProductsState[];
}
export interface NewsCardProps {
  data: NewsState[];
}
