package com.example.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.www.model.AuthUser;
import com.example.www.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public String signup(@RequestBody AuthUser user) {
        return authService.signup(user);
    }

    @PostMapping("/signin")
    public String signin(@RequestBody AuthUser user) {
        return authService.signin(user.getUsername(), user.getPassword());
    }
}

