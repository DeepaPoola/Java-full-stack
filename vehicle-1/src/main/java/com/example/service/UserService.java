package com.example.service;

import com.example.dto.User;

import java.util.List;

public interface UserService {


    boolean existsByMobileNo (String email);

    User saveUser(User user);

    List<User> getDrivers();
}
