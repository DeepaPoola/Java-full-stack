package com.example.Jdbc.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.Jdbc.dao.TestDao;
@Repository
public class TestDaoImpl implements TestDao {
  
	@Autowired
	JdbcTemplate jt;
	
	public void insertRecords() {
		// TODO Auto-generated method stub
       jt.update("insert into emp values(101,'Sunny',5000)");
       jt.update("insert into emp values(102,'Deepa',4000)");
	}

	@Override
	public List selectRecords() {
		// TODO Auto-generated method stub
		return jt.queryForList("select * from emp");
	}

	@Override
	public int noOfEmployees() {
		// TODO Auto-generated method stub
		return 0;
	}

}
