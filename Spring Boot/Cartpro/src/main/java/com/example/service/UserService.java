package com.example.service;


import java.util.List;

import com.example.model.User;

public interface UserService {
		User saveUser(User user);
		User updateUser(User user);
		void deleteUser(Long userId);
		User findByUsername(String userName);
		List<User> findAllUsers();
		Long numberOfUser();
}
