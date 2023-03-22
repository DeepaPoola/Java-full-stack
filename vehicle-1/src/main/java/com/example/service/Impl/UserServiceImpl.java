package com.example.service.Impl;

import com.example.dao.UserDao;
import com.example.dto.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;

	@Override
	public boolean existsByMobileNo(String mobileNo) {
		return userDao.existsByMobileNo(mobileNo);
	}

	@Override
	public User saveUser(User user) {
		return userDao.save(user);
	}

	@Override
	public List<User> getDrivers() {
		return userDao.getAllDrivers();
	}
}
