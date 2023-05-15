package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.model.User;
import com.example.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}
	//Test Case
	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub

	}

	@Override
	public User findByUsername(String userName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Long numberOfUser() {
		// TODO Auto-generated method stub
		return null;
	}

}