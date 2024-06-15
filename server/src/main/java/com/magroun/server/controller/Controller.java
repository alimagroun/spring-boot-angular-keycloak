package com.magroun.server.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class Controller {
	
    @GetMapping("/test")
    public String getMessage(Authentication authentication) {        
        return "Data from the backend received successfully!";
    }

}
