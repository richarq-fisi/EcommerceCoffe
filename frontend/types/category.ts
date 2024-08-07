export type CategoryType = {
  id: number;
  attributes: {
    categoryName: string;
    slug: string;
    mainImage: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
  };
};
