package com.example.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.www.jwttoken.JwtUtil;
import com.example.www.model.AuthUser;
import com.example.www.repo.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String signup(AuthUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    public String signin(String username, CharSequence charSequence) {
    	AuthUser user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid username"));

        if (!passwordEncoder.matches(charSequence, (String) user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(username);
    }
}
