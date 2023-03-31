package com.stack.server2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stack.server2.model.Product;



public interface ProductRepository extends JpaRepository<Product, Integer> {

}
