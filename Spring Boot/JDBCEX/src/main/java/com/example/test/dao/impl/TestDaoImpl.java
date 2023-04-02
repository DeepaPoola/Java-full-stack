package com.example.test.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.test.dao.TestDao;

@Repository
public class TestDaoImpl implements TestDao {
	
	@Autowired
	JdbcTemplate jt;
   public void insertRecords() {
	   jt.update("insert into emp values(101, 'Rahul Gandhi', 45000)");
	   jt.update("insert into emp values(102, ' Gandhi', 55000)");
	   jt.update("insert into emp values(103, 'Priyanka Gandhi', 65000)");
   }

@Override
public List selectRecords() {
	// TODO Auto-generated method stub
	return jt.queryForList("select * from emp");
}

@Override
public int noOfEmployess() {
	// TODO Auto-generated method stub
	return 0;
}
}
