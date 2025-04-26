import React, { useState } from "react";
import CartItem from "../cart-item/CartItem";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ListProduct = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // số sản phẩm mỗi trang

  const totalPages = Math.ceil(products.length / pageSize);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Tính các trang sẽ hiển thị (tối đa 4 số)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex-[0.8] lg:max-w-[75%] w-auto mb-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 row-span-5 gap-7 mb-10">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((e, index) => (
            <CartItem
              key={index}
              img={e.images?.[0]?.url || e.img}
              name={e.name}
              price={e.price}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent className="flex flex-wrap gap-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>

            {getPageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  className={currentPage === page ? "bg-black text-white" : ""}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ListProduct;
