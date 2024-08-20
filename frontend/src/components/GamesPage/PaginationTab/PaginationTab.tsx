import { FC, useState } from "react";

type PaginationTabProps = {
  maxAmountOfElements: number;
  numberOfElementsPerPage: number;
};
const PaginationTab: FC<PaginationTabProps> = ({
  maxAmountOfElements,
  numberOfElementsPerPage,
}) => {
  const [numberOfPages, setNumberOfPages] = useState(
    maxAmountOfElements / numberOfElementsPerPage
  );
  useState<number>(maxAmountOfElements);
  return <div className="pagination-tab">{}</div>;
};

export default PaginationTab;
