package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.model.CustomerBean;

@Repository
public class RegistrationDaoImpl {
	@Autowired
	JdbcTemplate jt;
	
	
	public boolean saveCustomer(CustomerBean customerBean) {
		// TODO Auto-generated method stub
		System.out.println(customerBean);
		String sqlcommand = "insert into user values(?,?,?,?)";
		jt.update(sqlcommand, customerBean.getFirstName(),customerBean.getEmail(),customerBean.getMobile(),customerBean.getPassword());
		return true;
	}
}
