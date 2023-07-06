export interface NewsState {
  id: number;
  title: string;
  desc: string;
  image?: string;
}
export interface ProductsState {
  id: number;
  name: string;
  desc: string;
  image?: string;
  price: number;
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
