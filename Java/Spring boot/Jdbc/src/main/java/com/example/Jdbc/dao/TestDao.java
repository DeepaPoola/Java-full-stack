package com.example.Jdbc.dao;

import java.util.List;

public interface TestDao {
  void insertRecords();
  List selectRecords();
  int noOfEmployees();
}
