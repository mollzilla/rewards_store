import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(1);
const maxPage = Math.ceil(data.length / itemsPerPage);

export function currentData() {
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;
  return data.slice(begin, end);
}

export function next() {
  setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
}

export function prev() {
  setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
}

export function jump(page) {
  const pageNumber = Math.max(1, page);
  setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
}
