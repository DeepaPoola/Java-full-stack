package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.example.model.CustomerBean;

public class RegistrationDaoImpl implements RegistrationDao {

	 @Autowired
	 JdbcTemplate jt;
	@Override
	public boolean saveCustomer(CustomerBean customerBean) {
		// TODO Auto-generated method stub
		System.out.println(customerBean);
		String sqlcommand = "insert into UserTwo values(?,?,?,?)";
		jt.update(sqlcommand, customerBean.getFirstName(),customerBean.getEmail(),customerBean.getMobile(),customerBean.getPassword());
		return false;
	}

}
