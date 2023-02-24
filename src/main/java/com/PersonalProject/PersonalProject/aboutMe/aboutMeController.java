package com.PersonalProject.PersonalProject.aboutMe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class aboutMeController {

    @GetMapping("/about-me")
    public String aboutMe() {
        return "about-me";
    }
}